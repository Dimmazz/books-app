import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Book from '../Book/Book';
import Cards from '../Cards/Cards';
import MainContainer from '../MainContainer/MainContainer';
import SearchBox from '../SearchBox/SearchBox';

const RoutesWrapper = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Cards />} />
          <Route path="/book/:id" element={<Book />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RoutesWrapper