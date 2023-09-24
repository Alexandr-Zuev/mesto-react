import React from 'react';
import api from '../utils/Аpi';

export default function Card({ src, title }) {
  return (
    <section class="elements">
      <article class="element">
        <img src={src} alt={title} class="element__img" />
        <button class="delete-button" type="button"></button>
        <div class="element__group">
          <h2 class="element__text">{title}</h2>
          <div class="element__like">
            <button class="like-button" type="button"></button>
            <p class="like-button_count">0</p>
          </div>
        </div>
      </article>
    </section>
  );
}
