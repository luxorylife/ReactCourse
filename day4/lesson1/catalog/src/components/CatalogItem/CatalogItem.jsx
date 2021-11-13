import React from 'react';
import './CatalogItem.scss';

const CatalogItem = (props) => {
  return (
    <li
      className={`catalog-item ${
        props.content.gender === 'Female' ? 'female' : 'male'
      }`}
    >
      <h3>{props.content.name}</h3>
      <img
        src={props.content.image}
        alt={`Аватар персонажа: ${props.content.name}`}
      />
      <p>{`Статус: ${props.content.status}`}</p>
      <p>{`Раса: ${props.content.species}`}</p>
      <p>{`Локация: ${props.content.location.name}`}</p>
    </li>
  );
};

export default CatalogItem;
