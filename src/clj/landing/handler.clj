(ns landing.handler
  (:require [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [landing.api :as api]
            [ring.util.response :refer [resource-response]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.reload :refer [wrap-reload]]))

(defroutes routes
           (GET "/" [] (resource-response "index.html" {:root "public"}))
           (POST "/feedback" [] (->
                              api/send-feedback
                              (wrap-json-body {:keywords? true :bigdecimals? true})
                              wrap-json-response))
           (resources "/"))

(def dev-handler (-> #'routes wrap-reload))

(def handler routes)

