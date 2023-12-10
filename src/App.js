import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import './App.css'

function App() {
  return (
      <Router basename = {process.env.PUBLIC_URL} >
          <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/quiz-questions/:quizId" element = {<Quiz />} />
              <Route path="*" element = "Page does not exist." />
          </Routes>
      </Router>
  );
}   

export default App;