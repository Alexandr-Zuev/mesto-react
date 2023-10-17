import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [popup, setPopupData] = useState({
    isOpen: false,
    children: ''
  });

  const isEditProfilePopupOpen = () => {
    setPopupData({
      isOpen: true
    });
  };

  const onAddPlace = () => {
    setPopupData({
      isOpen: true
    });
  };

  const onEditAvatar = () => {
    setPopupData({
      isOpen: true
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
      likes: item.likes,
      _id: item._id,
      name: item.name,
      link: item.link,
      owner: item.owner
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(currentCards => currentCards.filter(c => c._id !== card._id));
      })
      .catch(error => {
        console.error('Ошибка при удалении карточки:', error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          userName={currentUser.name}
          userDescription={currentUser.about}
          userAvatar={currentUser.avatar}
          handleEditProfileClick={isEditProfilePopupOpen}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
          cards={cards}
          handleCardClick={handleCardClick}
          handleLikeClick={handleCardLike}
          handleDeleteClick={handleCardDelete}
        />
        <EditProfilePopup isOpen={popup.isOpen} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
