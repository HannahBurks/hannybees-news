import { BrowserRouter, Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import AllArticles from './components/allArticles';
import Homepage from './components/homepage';
import Weather from './components/weather';
import NavBar from './components/navbar';
import Article from './components/article';
import Categories from './components/topic_articles';
import { useSearchParams } from "react-router-dom";
import ErrorPage from './components/errorPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavBar />
      <Routes>
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/categories" element = {<Categories />}/>
      <Route path="/:article_id" element = {<Article />}/>
      <Route path="/allArticles" element= {<AllArticles/>} /> 
      <Route path="/" element= {<Homepage />} /> 
      <Route path="/Weather" element= {<Weather/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
