function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

    // function handleEditAvatarClick() {
    //     const popupEditAvatar = document.querySelector('popup_type_avatar');
    //     popupEditAvatar.classList.add('popup_opened');
    // }
    
    
    // function handleEditProfileClick() {
    //     const popupEditProfile = document.querySelector('popup_type_item');
    //     popupEditProfile.classList.add('popup_opened');
    // }

    // function handleAddPlaceClick() {
    //     const popupAdd = document.querySelector('add');
    //     popupAdd.classList.add('popup_opened');
    // }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__avatar-button" onClick={onEditAvatar} type="button" aria-label="Изменить Аватар"></button>
                    <img className="profile__avatar-image" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Леонардо</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
                    <p className="profile__profession">Черепашка-ниндзя</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements"></section>
        </main>
    );
}

export default Main;