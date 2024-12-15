import React from 'react';
import './assets/scss/styles.scss';
import Header from './layouts/Header.jsx';
import MainHome from './pages/main/MainHome.jsx';

function App() {
  return (
    <div className="all--wrap">
      <Header />
      <MainHome />
    </div>
  );
}

export default App;
