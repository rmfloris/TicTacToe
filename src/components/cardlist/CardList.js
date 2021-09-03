import React from 'react';
import {Card} from '../card/Card'
import car1 from '../../assets/images/garbage-truck.svg';

export const CardList = () => {
  const vehicles = [
    {name: 'auto_1', image: car1},
    {name: 'auto_2', image: car1},
    {name: 'auto_3', image: car1},
    {name: 'auto_4', image: car1},
    {name: 'auto_5', image: car1},
    {name: 'auto_6', image: car1},
    {name: 'auto_7', image: car1},
    {name: 'auto_8', image: car1},
    {name: 'auto_9', image: car1},
    {name: 'auto_10', image: car1}
  ];
  const cards = vehicles.map(it =>
      <Card name={it.name} image={it.image}/>
  );
  return <div class="container">{cards}</div>;
};

