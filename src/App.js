import React from 'react';
import './style.css';
import { CardList } from './components/cardlist/CardList';

export default function App() {
  return (
      <div id="container">
        {/* <Header /> */}
        <CardList />
      </div>
  );
}