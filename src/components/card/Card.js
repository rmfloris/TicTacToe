import React from 'react';

export const Card = props => {
  return (
      <div class="card">
        <img src={props.image} class="cardImage" alt={props.name}/>
        <br/>
        {props.name}
        <br/>
        <Counter/>
      </div>
  );
};

function Counter() {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  return <button onClick={handleIncrement}>Count.. {count}</button>;
}