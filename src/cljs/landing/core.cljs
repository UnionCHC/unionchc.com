(ns landing.core
    (:require [reagent.core :as reagent :refer [atom]]
              [re-frame.core :as re-frame :refer [dispatch-sync]]
              [landing.components.form-feedback :as comp]
              [landing.events]
              [landing.subs]))

(enable-console-print!)

(defn mount-feedback []
  (reagent/render [comp/form-feedback]
                  (. js/document (getElementById "form-feedback"))))

(defn on-js-reload [])

(defn ^:export init []
  (dispatch-sync [:initialize-db])
  (mount-feedback))
