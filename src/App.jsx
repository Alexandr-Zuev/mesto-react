import '../public/index.css';
function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="logo" src="../src/images/logo.svg" alt="Место" />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-group">
            <img
              src="https://avatars.mds.yandex.net/i?id=6f55b06ca7b98614b8a7f1a025e1ee7a6838475d-9559767-images-thumbs&n=13"
              alt="аватар"
              className="profile__avatar"
            />
            <img
              src="../src/images/updateava.svg"
              alt="Редактирование аватара"
              className="profile__avatar-icon-up"
            />
          </div>

          <div className="profile__info">
            <div className="profile__info-title">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button id="open-popup-profile-button" className="open-button" type="button"></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button id="add-button" className="add-button" type="button"></button>
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__text">© 2022 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
