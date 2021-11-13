import React, { useState } from 'react';

const Cat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [catUrl, setCatUrl] = useState(null);
  const [error, setError] = useState('');

  const getCat = async () => {
    try{
      setIsLoading(true);
  
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatUrl(data[0].url);
      setError('');
      
    } catch(err){
      console.log(err);
      setError('Ошибка! Кот не загрузился =(');
    }
    setIsLoading(false);
  }

  return (
    <div>
      <button onClick={getCat} disabled={isLoading}>Показать кота</button>
      {catUrl && !isLoading && !error && (
        <div>
          <img src={catUrl} alt="Милый котик :)" width="300" />
        </div>
      )} 

      {isLoading && <p>Загружаю...</p>}

      {/* {catUrl && !isLoading ? (
        <div>
          <img src={catUrl} alt="Милый котик :)" width="600" />
        </div>
      ) : (
        <p>Пока картинки нет</p>
      )} */}

      <p>{error}</p>

    </div>
  )
}

export default Cat
