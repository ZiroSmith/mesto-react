function PopupWithForm({ name, title, isOpen, onClose, buttonText, children }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close-button" onClick={onClose} type="button" aria-label="Закрыть"></button>
                <form className={`form form-${name}`} name={`${name}`} noValidate>
                    <h2 className="form__title">{`${title}`}</h2>
                    {children}
                    <button className="form__save-button form__submit" type="submit">{`${buttonText}`}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;

/*
<div className="popup popup_type_item" id="popupItem">
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <form className="form form_edit" name="profile-info" novalidate>
          <h2 className="form__title">Редактировать профиль</h2>
          <input id="name-input" className="form__input form__input_type_name" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
          <span id="name-input-error" className="form__input-error"></span> 
          <input id="profession-input" className="form__input form__input_type_profession" name="job" type="text" placeholder="Профессия" required minlength="2" maxlength="200" />
          <span id="profession-input-error" className="form__input-error"></span>
          <button className="form__save-button form__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_add" id="popupAdd">
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <form className="form form_add" name="add-card" novalidate>
          <h2 className="form__title">Новое место</h2>
          <input id="place-input" className="form__input form__input_type_title" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
          <span id="place-input-error" className="form__input-error"></span>
          <input id="url-input" className="form__input form__input_type_link" name="link" placeholder="Ссылка на картинку" required type="url" />
          <span id="url-input-error" className="form__input-error"></span>
          <button className="form__save-button form__save-button_create form__submit" type="submit">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_avatar" id="popupAvatar">
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <form className="form form_avatar" name="avatarUpdateForm" novalidate>
          <h3 className="form__title">Обновить аватар</h3>
            <input id="avatar-input" className="form__input form__input_type_link" name="avatar" type="url" placeholder="Аватар" required />
            <span id="avatar-input-error" className="form__input-error"></span>
            <button className="form__save-button form__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_delete" id="popupDelete">
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <form className="form" name="confirmDelForm" novalidate>
          <h3 className="form__title">Вы уверены?</h3>
          <button className="form__save-button form__save-button_delete form__submit" type="submit">Да</button>
        </form>
      </div>
    </div>
    */