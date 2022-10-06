import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Blog from './components/routes/Blog';
import Blogs from './components/routes/Blogs';
import NewBlog from './components/routes/NewBlog';
import EditBlog from './components/routes/EditBlog';
import Home from './components/routes/Home';
import NavBar from './components/partials/NavBar'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
            />
          <Route
            path='/bounties'
            element={<Blogs />}
            />
          <Route
            path='/bounties/new'
            element={<Blog />}
            />
          <Route
            path='/bounties/:id'
            element={<NewBlog />}
            />
          <Route
            path='/bounties/:id/edit'
            element={<EditBlog />}
            />
        </Routes>
      </Router>
    </div>
  );
}


