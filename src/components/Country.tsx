import React from 'react';
import Card from './Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increaseRandomPopulation } from 'actions';


const Country = () => {
  const names = ['Argentina', 'Armenia', 'Aruba', 'Australia'];

  const dispatch = useDispatch();
  return (
    <div>
      {names.map((name) => (
        <Card id={name} key={name}></Card>
      ))}

      <Button variant="primary" style={{ margin: '2rem' }} onClick = {()=> dispatch(increaseRandomPopulation())}>
        Click Me
      </Button>
    </div>
  );
};

export default Country;
