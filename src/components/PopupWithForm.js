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