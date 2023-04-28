import {useState} from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <>
    <div className="App">
    <Header />
    <Main 
    onEditAvatar={handleEditAvatarClick}
    onAddPlace={handleAddPlaceClick}
    onEditProfile={handleEditProfileClick}
    />
    <Footer />
    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    />
    <AddPlacePopup
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    />
    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    />
    <PopupWithForm />
    <ImagePopup />
    
    <template id="card-template">
      <article className="card">
        <button className="card__del-button" type="button" aria-label="Удалить"></button>
        <img className="card__image" src="#" alt="" />
        <div className="card__info">
          <h2 className="card__text"></h2>
          <div className="card__like-container">
            <button className="card__like-button" type="button" aria-label="Нравится"></button>
            <p className="card__like-number"></p>
          </div>
        </div>
      </article>
    </template>

    </div>
    </>
  );
}

export default App;
