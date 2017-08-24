(ns landing.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :db/feedback
  (fn [db]
    (:feedback db)))

