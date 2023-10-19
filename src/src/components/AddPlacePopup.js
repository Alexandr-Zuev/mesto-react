import React, { useState, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [newCardData, setNewCardData] = useState({
    name: '',
    link: '',
  });

  const nameRef = useRef();
  const linkRef = useRef();

  const handleNameChange = (e) => {
    setNewCardData({ ...newCardData, name: e.target.value });
  };

  const handleLinkChange = (e) => {
    setNewCardData({ ...newCardData, link: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(newCardData);
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add-form"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} // Добавлен обработчик onSubmit
    >
      <input
        type="text"
        id="name-input-card"
        className="popup__input"
        name="name-input-card"
        placeholder="Название"
        required
        value={newCardData.name}
        onChange={handleNameChange}
        ref={nameRef}
      />
      <span id="name-input-card-error" className="popup__error"></span>
      <input
        type="url"
        id="name-input-link"
        className="popup__input"
        name="name-input-link"
        placeholder="Ссылка на картинку"
        required
        value={newCardData.link}
        onChange={handleLinkChange}
        ref={linkRef}
      />
      <span id="name-input-link-error" className="popup__error"></span>
      <button type="submit" className="popup__button">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;