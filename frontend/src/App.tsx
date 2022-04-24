import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="App">
        <h1>{t('main.welcome')}</h1>
      </div>
      <div>
        <button type="button" onClick={() => changeLanguage('ru')}>
          ru
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
    </>
  );
}

export default App;
