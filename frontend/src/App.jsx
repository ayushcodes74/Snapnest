
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import CreatePost from './pages/CreatePost.jsx';
import Feed from './pages/Feed.jsx';

const Home = () => {
  return (
    <main>
      <CreatePost />
      <Feed />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
