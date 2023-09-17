import React from 'react';
import updateAva from '../images/updateava.svg';

function Main() {
  const handleEditProfileClick = () => {
    const profilePopup = document.querySelector('.popup');
    profilePopup.classList.add('popup_is-opened');
  };

  return (
    <div className="profile">
      <div className="profile__avatar-group">
        <img
          src="https://avatars.mds.yandex.net/i?id=ff93ba9764f06d9f1818936f895d040590f016c9-10696775-images-thumbs&n=13"
          alt="аватар"
          className="profile__avatar"
        />
        <img src={updateAva} alt="Редактирование аватара" className="profile__avatar-icon-up" />
      </div>

      <div className="profile__info">
        <div className="profile__info-title">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            id="open-popup-profile-button"
            className="open-button"
            type="button"
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button id="add-button" className="add-button" type="button"></button>
    </div>
  );
}

export default Main;
