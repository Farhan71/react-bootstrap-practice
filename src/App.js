import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import TopHeadlines from './Components/TopHeadlines/TopHeadlines';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2> <br />
      <Header></Header> <br />
      <TopHeadlines></TopHeadlines> <br />
      {/* <News></News> <br /> */}
    </div>
  );
}

export default App;
