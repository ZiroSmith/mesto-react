function ImagePopup() {
    return (
        <div className="popup popup_type_expand" id="popupExpand">
            <div className="popup__container popup__container_expand">
                <div className="popup__container-info">
                    <button className="popup__close-button popup__close-button_type_expand" type="button" aria-label="Закрыть"></button>
                    <img className="popup__image-expand" src="#" alt="" />
                    <h2 className="popup__text-expand"></h2>
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;