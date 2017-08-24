(ns landing.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db]]
            [landing.db :as db]))

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/app-db))

(reg-event-db
  :feedback/update
  (fn [db [key value]]
    (js/console.log "Feedback update")
    (js/console.log "key:" key)
    (js/console.log "value:" value)
    (assoc-in db [:feedback key] value)))
