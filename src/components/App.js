import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: '',
    name: '',
    nameSubBtn: '',
    children: ''
  });

  const onEditProfile = () => {
    setPopupData({
      isOpen: true,
      title: 'Редактировать профиль',
      name: 'edit-form',
      nameSubBtn: 'Сохранить',
      children: (
        <>
          <input
            id="name-input-title"
            type="text"
            className="popup__input"
            name="name-input-title"
            required
          />
          <span id="name-input-title-error" className="popup__error"></span>
          <input
            id="name-input-subtitle"
            type="text"
            className="popup__input"
            name="name-input-subtitle"
            required
          />
          <span id="name-input-subtitle-error" className="popup__error"></span>
        </>
      )
    });
  };

  const onAddPlace = () => {
    setPopupData({
      isOpen: true,
      title: 'Новое место',
      name: 'add-form',
      nameSubBtn: 'Создать',
      children: (
        <>
          <input
            id="name-input-card"
            type="text"
            className="popup__input"
            name="name-input-card"
            placeholder="Название"
            required
          />
          <span id="name-input-card-error" className="popup__error"></span>
          <input
            id="name-input-link"
            type="url"
            className="popup__input"
            name="name-input-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="name-input-link-error" className="popup__error"></span>
        </>
      )
    });
  };

  const onEditAvatar = () => {
    setPopupData({
      isOpen: true,
      title: 'Обновить аватар',
      name: 'new-avatar-form',
      nameSubBtn: 'Сохранить',
      children: (
        <>
          <input
            id="new-avatar-link"
            type="url"
            className="popup__input"
            name="new-avatar-link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="new-avatar-link-error" className="popup__error"></span>
        </>
      )
    });
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const handleCardClick = card => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setPopupData({
      isOpen: false,
      title: '',
      name: '',
      children: ''
    });
    setSelectedCard(null);
  };

  const mapCards = cards => {
    return cards.map(item => ({
      id: item._id,
      src: item.link,
      alt: item.name,
      title: item.owner.name,
      subtitle: item.owner.about
    }));
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then(res => {
        setCards(mapCards(res));
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div className="page">
      <Header />

      <Main
        handleEditProfileClick={onEditProfile}
        handleAddPlaceClick={onAddPlace}
        handleEditAvatarClick={onEditAvatar}
        cards={cards}
        handleCardClick={handleCardClick}
      />

      <PopupWithForm
        title={popupData.title}
        name={popupData.name}
        isOpen={popupData.isOpen}
        onClose={closeAllPopups}
        children={popupData.children}
        nameSubBtn={popupData.nameSubBtn}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />

      <Footer />
    </div>
  );
}

export default App;
