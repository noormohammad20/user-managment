import React from 'react';
import './App.css';

let student: string = 'jolly'
let age: number = 33
let isSmart: boolean = true

let students: string[] = ['joe', 'biden', 'harris']
let fees: number[] = [33, 35, 64, 33]


interface Person {
  name: string,
  job?: string,
  age: number
}

const person: Person = {
  name: 'bil',
  age: 35
}


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
