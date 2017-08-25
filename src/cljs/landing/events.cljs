(ns landing.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db trim-v console]]
            [landing.db :as db]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]))

(def interceptors [trim-v])

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/app-db))

(reg-event-db
  :feedback/update
  interceptors
  (fn [db [key value]]
   (assoc-in db [:feedback key] value)))

(reg-event-fx
  :feedback/send
  interceptors
  (fn [{:keys [db]} _]
   {:db (assoc-in db [:feedback] {:name ""
                                   :emain ""
                                   :phone ""
                                   :message ""})
    :http-xhrio {:method :post
                 :uri "feedback"
                 :timeout 6000
                 :params (:feedback db)
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:feedback/result]
                 :on-failure [:log-error]}}))

(reg-event-fx
  :feedback/result
  interceptors
  (fn [_ _]
    {}))

(reg-event-fx
  :log-error
  interceptors
  (fn [_ [err]]
    (console :error err)
    {}))
