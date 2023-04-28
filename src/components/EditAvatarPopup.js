import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'update-avatar'}
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="url"
        name="avatar"
        placeholder="Аватар"
        required
        className="form__input form__input_type_link"
        id="avatar-input"
      />
      <span className="popup__error avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;