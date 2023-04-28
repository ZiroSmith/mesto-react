function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }
  
    return (
      <article className="card">
        <button className="card__del-button" type="button" aria-label="Удалить"></button>
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__info">
          <h2 className="card__text">{card.name}</h2>
          <div className="card__like-container">
          <button className="card__like-button" type="button" aria-label="Нравится"></button>
          <p className="card__like-number">{card.likes.length}</p>
          </div>
        </div> 
      </article>
    );
  }
  
  export default Card;