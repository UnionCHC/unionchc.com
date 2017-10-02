(ns landing.server
  (:require [landing.handler :refer [handler]]
            [config.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.tools.logging :refer [info]])
  (:gen-class
    :implements [org.apache.commons.daemon.Daemon])
  (:import [org.apache.commons.daemon DaemonContext]
           [org.eclipse.jetty.server Server]))

;; Defaults

(def default-port "3001")
(def state (atom {:server nil}))

(defn init [args])

(defn start []
  (let [port (Integer/parseInt (or (env :port) default-port))
        server (run-jetty handler {:port port
                                   :join? false})]
    (info "Server started")
    (swap! state assoc :server server)))

(defn stop []
  (when-let [server ^Server (:server @state)]
    (info "Server stoping")
    (.stop server)))

;; Daemon implementation

(defn -init [this ^DaemonContext context]
  (init (.getArguments context)))

(defn -start [this]
  (future (start)))

(defn -stop [this]
  (stop))

(defn -destroy [this])

(defn -main [& args]
  (init args)
  (start))

