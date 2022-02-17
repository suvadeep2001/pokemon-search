import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PokeTypes = ({ onInputChange }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      try {
        const { data } = await axios.get('https://api.pokemontcg.io/v1/types');
        setTypes(data.types);
      } catch (err) {
        console.error(err);
      }
    };
    getTypes();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-5">
      {types.map(type => (
        <label
          className={`flex justify-between border rounded py-1 px-2 cursor-pointer text-${type.toLowerCase()} border-${type.toLowerCase()}`}
          key={type}
        >
          <span>{type}</span>
          <input
            type="checkbox"
            className="ml-2"
            name="pokemonType"
            value={type}
            onChange={onInputChange}
          />
        </label>
      ))}
    </div>
  );
};

PokeTypes.propTypes = {
  onInputChange: PropTypes.func
};

export default PokeTypes;
