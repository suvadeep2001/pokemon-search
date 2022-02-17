import React, { useState } from 'react';

import SearchForm from './components/SearchForm';
import CardList from './components/CardList';

import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-red-700">
        <h1 className="text-3xl text-white py-2">Pokemon TCG Search</h1>
      </div>
      <div className="flex flex-col">
        <SearchForm setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default App;
