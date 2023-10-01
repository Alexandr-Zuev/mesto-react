import React, { useState, useEffect } from 'react';
import updateAva from '../images/updateava.svg';
import { api } from '../utils/Аpi.js';

function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    const handleRequest = function () {
      api
        .getUserInfo()
        .then(userData => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
        })
        .catch(error => {
          console.error('Ошибка при получении данных о пользователе:', error);
        });
    };

    handleRequest();
  }, []);

  return (
    <div className="profile">
      <div className="profile__avatar-group">
        <img src={userAvatar} alt="аватар" className="profile__avatar" />
        <img
          src={updateAva}
          alt="Редактирование аватара"
          className="profile__avatar-icon-up"
          onClick={handleEditAvatarClick}
        />
      </div>

      <div className="profile__info">
        <div className="profile__info-title">
          <h1 className="profile__title">{userName}</h1>
          <button
            id="open-popup-profile-button"
            className="open-button"
            type="button"
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <p className="profile__subtitle">{userDescription}</p>
      </div>
      <button
        id="add-button"
        className="add-button"
        type="button"
        onClick={handleAddPlaceClick}
      ></button>
    </div>
  );
}

export default Main;
