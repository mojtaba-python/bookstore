import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/About';
import Books from './component/Books';
import Book from './component/Book';
import NotFound from './component/NotFound';
import Login from './component/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:bookId' element={<Book/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
