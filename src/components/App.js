import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="content">
          <Main />
        </div>
        <Footer />
        <PopupWithForm />
      </div>
    </>
  );
}

export default App;
