import React from 'react';

export default function Card({ cards, onCardClick }) {
  const handleClick = card => {
    onCardClick(card);
  };

  return (
    <section className="elements">
      {cards.map(card => (
        <article key={card.id} className="element" id={card.id}>
          <img
            src={card.src}
            alt={card.alt}
            className="element__img"
            onClick={() => handleClick(card)}
          />
          <button className="delete-button" type="button"></button>
          <div className="element__group">
            <h2 className="element__text">{card.title}</h2>
            <div className="element__like">
              <button className="like-button" type="button"></button>
              <p className="like-button_count">0</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
