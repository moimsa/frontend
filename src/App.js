import React from 'react';
import './assets/scss/styles.scss';
import Header from './layouts/Header.jsx';
import MainHome from './pages/main/MainHome.jsx';
import { Routes, Route } from 'react-router-dom';
import MoimContents from './layouts/MoimContents.jsx';

function App() {
  return (
    <div className="all--wrap">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainHome />}
        />
        <Route
          path="/moim/:id"
          element={<MoimContents />}
        />
      </Routes>
    </div>
  );
}

export default App;
