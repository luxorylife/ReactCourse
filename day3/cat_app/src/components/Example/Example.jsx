import React, { useEffect, useState } from 'react';

const Example = () => {

  const [rndNum, setRndNum] = useState(0);

  useEffect(() => {
    console.log('first render');
    return () => {
      console.log('unmount2');
    }
  }, []); // 1 render

  // useEffect(() => {
  //   console.log('every render');
  // }); // Every render - нет смысла

  useEffect(() => {
    console.log('random num render');
    return () => {
      console.log('unmount3');
    }
  }, [rndNum]); // выполняется при изменении rndNum

  useEffect(() => {
    return () => {
      console.log('unmount1');
    }
  }, []); // 

  const generateRandomNum = () => {
    setRndNum(Math.round(Math.random() * 1000));
  };

  return (
    <div>
      <h1>{rndNum}</h1>
      <button onClick={generateRandomNum}>Сгенерировать число</button>
    </div>
  )
};

export default Example
