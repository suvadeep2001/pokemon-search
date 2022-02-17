import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = ({ cards }) => {
  return cards.length > 0 ? (
    <ul className="m-5 overflow-y-scroll grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {cards && cards.map(card => <CardListItem key={card.id} card={card} />)}
    </ul>
  ) : (
    <div className="flex flex-grow justify-center items-center">
      <h1 className="text-black text-2xl font-light">No Results</h1>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array
};

export default CardList;
