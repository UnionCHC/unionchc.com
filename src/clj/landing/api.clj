(ns landing.api
  (:require [ring.util.response :refer [response]]
            [landing.util :as u])
  (:use [clojure.java.io]))


(defn send-feedback [{:keys [body]}]
  (let [{:keys [name email phone message]} body]
    (with-open [wr (writer "feedback.txt" :append true)]
      (.write wr (str "----- " (u/now) " -----\n"))
      (when name (.write wr (str "name: " name "\n")))
      (when email (.write wr (str "email: " email "\n")))
      (when phone (.write wr (str "phone: " phone "\n")))
      (when message (.write wr (str "message: " message "\n")))))
  (response {:result "ok"}))

