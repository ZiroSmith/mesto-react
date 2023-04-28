import {useState, useEffect} from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    function setUserInfo() {
        api.getUserInfo()
          .then((userData) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }

      function setCardsData() {
        api.getInitialCards()
          .then((cardsData) => {
            setCards(cardsData);
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }

      useEffect(() => {
        setUserInfo();
        setCardsData();
      }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__avatar-button" onClick={onEditAvatar} type="button" aria-label="Изменить Аватар"></button>
                    <img className="profile__avatar-image" src={userAvatar} alt="Аватар" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
                    {
                        cards.map((item) => {
                            return <Card
                                key={item._id} 
                                card={item} 
                                onCardClick={onCardClick}/>
                        })
                    }
            </section>
        </main>
    );
}

export default Main;