(ns landing.components.form-feedback
  (:require [re-frame.core :refer [dispatch subscribe]]
            [landing.db :as db]
            [landing.utils :as u]))

(defn form-feedback []
  (let [fb (subscribe [:db/feedback])]
    (fn []
       [:div {:class "row"}
        [:div {:class "col-md-6"}

         [:div {:class "form-group"}
          [:input {:type "text"
                   :class "form-control"
                   :placeholder "Ваше имя *"
                   :id "name"
                   :required "true"
                   :value (:name @fb)
                   :on-change #(dispatch [:feedback/update :name (u/evt-val %)])
                   :data-validation-required-message "Пожалуйста укажите Ваше имя."}]
          [:p {:class "help-block text-danger"}]]

         [:div {:class "form-group"}
          [:input {:type "email"
                   :class "form-control"
                   :placeholder "Ваш Email *"
                   :id "email"
                   :required "true"
                   :value (:email @fb)
                   :on-change #(dispatch [:feedback/update :email (u/evt-val %)])
                   :data-validation-required-message "Пожалуйста укажите адрес Вашей электронной почты."}]
          [:p {:class "help-block text-danger"}]]

         [:div {:class "form-group"}
          [:input {:type "tel"
                   :class "form-control"
                   :placeholder "Ваш телефон"
                   :value (:phone @fb)
                   :on-change #(dispatch [:feedback/update :phone (u/evt-val %)])
                   :id "phone"}]
          [:p {:class "help-block text-danger"}]]]

        [:div {:class "col-md-6"}

         [:div {:class "form-group"}
          [:textarea  {:class "form-control"
                       :placeholder "Текст сообщения *"
                       :id "message"
                       :required "true"
                       :value (:message @fb)
                       :on-change #(dispatch [:feedback/update :message (u/evt-val %)])
                       :data-validation-required-message "Введите текст сообщения."}]
          [:p {:class "help-block text-danger"}]]]
        [:div {:class "clearfix"}]
        [:div {:class "col-lg-12 text-center"}
         [:div {:id "success"}]
         [:button {:class "btn btn-primary btn-xl"
                   :disabled (or (empty? (:name @fb))
                                 (empty? (:email @fb))
                                 (empty? (:message @fb))
                                 #_(false? (:sending? @fb)))
                   :on-click #(dispatch [:feedback/send])
                   }
          "Отправить сообщение"]]])))

