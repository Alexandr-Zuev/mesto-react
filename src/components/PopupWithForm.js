import React from 'react';

function PopupWithForm() {
  return (
    <div id="popup-edit-profile" className="popup">
      <div className="popup__content">
        <button className="popup__close-button" type="button"></button>
        <form id="edit-form" className="popup__form" name="edit-form">
          <h2 className="popup__title">Редактировать профиль</h2>
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
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
