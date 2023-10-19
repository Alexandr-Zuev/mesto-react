import updateAva from '../images/updateava.svg';
import Card from './Card';

function Main({
  userName,
  userDescription,
  userAvatar,
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
  cards,
  handleCardClick,
  handleLikeClick,
  handleDeleteClick
}) {
  return (
    <main className="content">
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
      <section className="elements">
        {cards.map(card => (
          <Card card={card} key={card._id} onCardClick={handleCardClick} onCardLike ={handleLikeClick} onCardDelete ={handleDeleteClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
