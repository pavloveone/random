import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AvatarContainer } from '../avatar-container/avatar-container';
import { Greeting } from '../greeting/greeting';
import styles from './App.module.css';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className={styles.App}>
      <Routes location={background || location}>
        <Route path='/' element={<Greeting />} />
        <Route path='/avatar' element={<AvatarContainer />} />
      </Routes>
    </div>
  );
}

export default App;
