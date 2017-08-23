(ns landing.core
    (:require [reagent.core :as reagent :refer [atom]]
              [landing.components.form-feedback :refer [form-feedback]]))

(enable-console-print!)

(println "This text is printed from src/landing/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]])

(reagent/render-component [form-feedback]
                          (. js/document (getElementById "form-feedback")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn ^:export init []
  (js/console.log "Application init ok!"))
