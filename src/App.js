import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import AllArticles from './components/allArticles';
import Homepage from './components/homepage';
import Weather from './components/weather';
import NavBar from './components/navbar';
import Article from './components/article';
import Coding from './components/coding_page';
import Cooking from './components/cooking_page';
import Football from './components/football_page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavBar />
      <Routes>
      <Route path="/coding" element = {<Coding />}/>
      <Route path="/cooking" element = {<Cooking />}/>
      <Route path="/football" element = {<Football />}/>
      <Route path="/:article_id" element = {<Article />}/>
      <Route path="/allArticles" element= {<AllArticles/>} /> 
      <Route path="/" element= {<Homepage />} /> 
      <Route path="/weather" element= {<Weather/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
