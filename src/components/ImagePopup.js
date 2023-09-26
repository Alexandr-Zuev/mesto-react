import React from 'react';

function ImagePopup({ card, onClose, isOpen }) {
  
  if (!card) return null;
  return (
    <div className={`popup popupCard ${isOpen ? 'popup_is-opened' : ''}`}>
          <div className="popup__content">
            <button className="popup__close-button" type="button" onClick={onClose}></button>
            <img src={card.src} alt={card.alt} className="popup__image" />
            <p className="popup__title-image">{card.title}</p>
          </div>
     </div>
  );
}

export default ImagePopup;


