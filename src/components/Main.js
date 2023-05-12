import React from 'react';
import {useState, useEffect} from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from './contexts/CurrentUserContext.js';

function Main({ 
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    onCardLike,
    onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);


      function setCardsData() {
        api.getInitialCards()
          .then((cardsData) => {
            setCards(cardsData);
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }

      useEffect(() => {
        setCardsData();
      }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__avatar-button" onClick={onEditAvatar} type="button" aria-label="Изменить Аватар"></button>
                    <img className="profile__avatar-image" src={currentUser.avatar} alt="Аватар" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
                    {
                        cards.map((item) => {
                            return <Card
                                key={item._id} 
                                card={item} 
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}/>
                        })
                    }
            </section>
        </main>
    );
}

export default Main;