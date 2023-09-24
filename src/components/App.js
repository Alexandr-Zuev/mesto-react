import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Card from './Card';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: '',
    name: '',
    children: ''
  });

  const onEditProfile = () => {
    setPopupData({
      isOpen: true,
      title: 'Редактировать профиль',
      name: 'edit-form',
      children: (
        <>
          <input
            id="name-input-title"
            type="text"
            className="popup__input"
            name="name-input-title"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-input-title-error" className="popup__error"></span>
          <input
            id="name-input-subtitle"
            type="text"
            className="popup__input"
            name="name-input-subtitle"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="name-input-subtitle-error" className="popup__error"></span>
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </>
      )
    });
  };

  const onAddPlace = () => {
    setPopupData({
      isOpen: true,
      title: 'Новое место',
      name: 'add-form',
      children: (
        <>
          <input
            id="name-input-card"
            type="text"
            class="popup__input"
            name="name-input-card"
            placeholder="Название"
            required
            minlength="2"
            maxlength="30"
          />
          <span id="name-input-card-error" class="popup__error"></span>
          <input
            id="name-input-link"
            type="url"
            class="popup__input"
            name="name-input-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="name-input-link-error" class="popup__error"></span>
          <button id="popup-card-button" type="submit" class="popup__button">
            Создать
          </button>
        </>
      )
    });
  };

  const onEditAvatar = () => {
    setPopupData({
      isOpen: true,
      title: 'Обновить аватар',
      name: 'new-avatar-form',
      children: (
        <>
          <input
            id="new-avatar-link"
            type="url"
            class="popup__input"
            name="new-avatar-link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="new-avatar-link-error" class="popup__error"></span>
          <button id="popup-update-avatar-button" type="submit" class="popup__button">
            Сохранить
          </button>
        </>
      )
    });
  };

  const closeAllPopups = () => {
    setPopupData({
      isOpen: false,
      title: '',
      name: '',
      children: ''
    });
  };

  return (
    <div className="page">
      <Header />
      <main className="content">
        <Main
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
        />
        <Card />
        <PopupWithForm
          title={popupData.title}
          name={popupData.name}
          isOpen={popupData.isOpen}
          onClose={closeAllPopups}
          children={popupData.children}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
