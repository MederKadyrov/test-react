import React from 'react'
import Footer from './components/footer/Footer';
import MainSection from './components/mainsection/MainSection';
import Header from './components/header/Header';
const users = [
  {
    name: "Иван",
    lastName: "Иванов",
    age: 25,
    id: 1,
  },
  {
    name: "Петр",
    lastName: "Петров",
    age: 30,
    id: 2,
  },
  {
    name: "Мария",
    lastName: "Сидорова",
    age: 20,
    id: 3,
  },
];
const App = () => {
  return (
    <div>
      <Header/>
      <MainSection users={users}/>
      <Footer/>
    </div>
  )
}

export default App