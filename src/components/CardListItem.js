import React from 'react';
import PropTypes from 'prop-types';

const CardListItem = ({ card }) => {
  const pokeDotCom = `https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=${
    card.name || ''
  }&evolvesFrom=${card.evolvesFrom || ''}&particularArtist=${card.artist || ''}`;

  return (
    <li>
      <a className="block h-full" target="_blank" href={pokeDotCom} rel="noopener noreferrer">
        <img className="w-full h-auto" src={card.imageUrl} alt={`${card.name} Pokemon Card`} />
      </a>
    </li>
  );
};

CardListItem.propTypes = {
  card: PropTypes.object
};

export default CardListItem;
