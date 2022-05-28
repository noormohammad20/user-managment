import React from 'react';
import './App.css';
import Counter from './components/Counter';

let student: string = 'jolly'
let age: number = 33
let isSmart: boolean = true

let students: string[] = ['joe', 'biden', 'harris']
let fees: number[] = [33, 35, 64, 33]


interface Person {
  name: string,
  job?: string,
  employed: string | boolean
  age: number
  location: number | string
}

const person: Person = {
  name: 'bil',
  employed: true,
  age: 35,
  location: 'south mugda'
}

const handleAddUser = (firstName: string, age: number, address: string): number => {
  const total: number = 50
  console.log(firstName, age, address);
  return total
}


function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
