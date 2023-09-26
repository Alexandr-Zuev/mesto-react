import React, { useState, useEffect } from 'react';
import api from '../utils/Аpi';

export default function Card(props) {
  const mapCards = (cards) => {
    return cards.map((item) => ({
      id: item._id,
      src: item.link,
      alt: item.name,
      title: item.owner.name,
      subtitle: item.owner.about,
    }));
  };

  const [cards, setCards] = useState([]);
 

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(mapCards(res));
        
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        
      });
  }, []);

  const handleClick = (card) => {
    props.onCardClick(card);
  };

  return (
    <section className="elements">
      
      {cards.map((card) => (
        <article key={card.id} className="element" id={card.id}>
          <img src={card.src} alt={card.alt} className="element__img" onClick={() => handleClick(card)} />
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