import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'item'}
      isOpen={isOpen}
      onClose={onClose}
    >
    <input
        type="text"
        name="name"
        placeholder="Имя"
        required
        className="form__input form__input_type_name"
        id="name-input"
      />
    <span 
        id="name-input-error"
        className="form__input-error">
    </span> 
    <input 
        type="text"
        name="job" 
        placeholder="Профессия"
        required
        className="form__input form__input_type_profession"
        id="profession-input"   
    />
    <span 
        id="profession-input-error" 
        className="form__input-error">
    </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;