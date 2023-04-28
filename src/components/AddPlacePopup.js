import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'item'}
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
    >
    <input
        type="text"
        name="name"
        placeholder="Название"
        required
        className="form__input form__input_type_title"
        id="place-input"
      />
    <span 
        id="place-input-error"
        className="form__input-error">
    </span> 
    <input 
        type="url"
        name="link" 
        placeholder="Ссылка на картинку"
        required
        className="form__input form__input_type_link"
        id="url-input"   
    />
    <span 
        id="profession-input-error" 
        className="url-input-error">
    </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;