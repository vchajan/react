import React from 'react';

function ArrayMethodsDemo() {
  const cisla = [1, 2, 3, 4];
  const slova = ['jablko', 'hruška', 'banán'];

  const zdvojnasobene = cisla.map(cislo => cislo * 2);
  const parne = cisla.filter(cislo => cislo % 2 === 0);
  const suma = cisla.reduce((akumulator, cislo) => akumulator + cislo, 0);
  const usporiadaneSlova = [...slova].sort();

  return (
    <div>
      <h3>Array map Metóda</h3>
      <p>Zdvojnásobené čísla: {zdvojnasobene.join(', ')}</p>
      
      <h3>Array filter Metóda</h3>
      <p>Párne čísla: {parne.join(', ')}</p>
      
      <h3>Array reduce Metóda</h3>
      <p>Súčet čísel: {suma}</p>
      
      <h3>Array sort Metóda</h3>
      <p>Usporiadané slová: {usporiadaneSlova.join(', ')}</p>
    </div>
  );
}

export default ArrayMethodsDemo;
