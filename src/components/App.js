import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Card from './Card';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Аpi';

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
          <button id="popup-card-button" type="submit" className="popup__button">
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
            className="popup__input"
            name="new-avatar-link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="new-avatar-link-error" className="popup__error"></span>
          <button id="popup-update-avatar-button" type="submit" className="popup__button">
            Сохранить
          </button>
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
      <main className="content">
        <Main
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
        />
        <Card cards={cards} onCardClick={handleCardClick} />
        <PopupWithForm
          title={popupData.title}
          name={popupData.name}
          isOpen={popupData.isOpen}
          onClose={closeAllPopups}
          children={popupData.children}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
