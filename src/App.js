import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeText from './ChangeText';
import Button from './Button';
import { useState } from "react";
import ToDoList from './ToDoList';

function App() {
  const [show, setShow]=useState(false);
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      {show ? <Counter /> : <></>}
      <button onClick={()=>setShow(!show)}>Нажми</button>
      <UserCard name="Саша" age="21" />
      <ChangeText />
      <Button buttontext="Нажми" />
      <ToDoList />
      <Footer />

    </div>
  );
}

export default App;
