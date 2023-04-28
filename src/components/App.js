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
  const [selectedCard, setSelectedCard] = useState({});

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
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = (cardData) => {
    setSelectedCard({
      open: 'popup_opened',
      link: cardData.link,
      name: cardData.name
    });
  }

  return (
    <>
    <div className="App">
    <Header />
    <Main 
    onEditAvatar={handleEditAvatarClick}
    onAddPlace={handleAddPlaceClick}
    onEditProfile={handleEditProfileClick}
    onCardClick={handleCardClick}
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
    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
    />
    <PopupWithForm />
    </div>
    </>
  );
}

export default App;
