import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { defaultMemoize } from 'reselect';

const fib = defaultMemoize((n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
});

const memoizedFib = defaultMemoize(fib);

export default ({ id }: { id: string }) => {
  // solution 1: retrieve countries from store then find the country
  // problem: un-realted country change will still cause current component to re-render
  // const countries = useSelector((store: store) => store.countries);
  // const country = countries.find((country) => country.country === id);

  // solution 2: retrieve country from store directly
  // solve: un-related country change will not cause current component to re-render
  // insight: as specific as possible
  // problem: cannot cache time-consuming process! -> fib
  //   const country = useSelector((store: store) => {
  //     const coutries = store.countries;
  //     const country = coutries.find((c) => c.country === id);
  //     fib(40)
  //     return country;
  //   });

  const country = useSelector((store: store) => {
    const countries = store.countries;
    const country = countries.find((c) => c.country === id);
    memoizedFib(40);
    return country;
  });

  return (
    <Card bg={'secondary'} style={{ width: '18rem', margin: '2rem' }}>
      <Card.Body>
        <Card.Title> {id}</Card.Title>
        {country?.population} <br />
      </Card.Body>
    </Card>
  );
};
