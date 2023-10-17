import React, { useState, useEffect } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const handleClick = card => {
    onCardClick(card);
  };
  const handleLikeClick = card => {
    onCardLike(card);
  };
  const handleDeleteClick = card => {
    onCardDelete(card);
  };

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then(userInfo => {
        setCurrentUser(userInfo);
      })
      .catch(error => {
        console.error('Ошибка при получении информации о пользователе:', error);
      });
  }, []);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `like-button ${isLiked && 'like-button_status-active'}`;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <article className="element" id={card._id}>
        <img
          src={card.link}
          alt={card.name}
          className="element__img"
          onClick={() => handleClick(card)}
        />
        {isOwn && (
          <button
            className="delete-button"
            type="button"
            onClick={() => handleDeleteClick(card)}
          ></button>
        )}
        <div className="element__group">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={() => handleLikeClick(card)}
            ></button>
            <p className="like-button_count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </CurrentUserContext.Provider>
  );
}
