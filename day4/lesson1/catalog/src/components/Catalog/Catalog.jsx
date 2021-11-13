import React, { useState, useEffect } from 'react';
import CatalogItem from '../CatalogItem';
import './Catalog.scss';

const Catalog = () => {
  const [list, setList] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(1);
  const [pages, setPages] = useState([]);

  const getCharacters = async (pageNum = 1) => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?page=' + pageNum
      );
      const data = await response.json();
      setList(data.results);
      setPagesTotal(data.info.pages);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPagesArray = (total = 1) => {
    const arr = [];
    for (let i = 0; i < total; i += 1) arr.push(i + 1);
    return arr;
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    setPages(getPagesArray(pagesTotal));
  }, [pagesTotal]);

  return (
    <div className="catalog">
      <h1>Каталог персонажей</h1>

      <div className="pagination">
        {pages.map((pageNum) => {
          return (
            <button key={pageNum} onClick={() => getCharacters(pageNum)}>
              {pageNum}
            </button>
          );
        })}
      </div>

      <ul>
        {list.map((character) => {
          // return <li>{character.name}</li>;
          return <CatalogItem key={character.id} content={character} />;
        })}
      </ul>
    </div>
  );
};

export default Catalog;
