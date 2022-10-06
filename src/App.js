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
            path='/blogs'
            element={<Blogs />}
            />
          <Route
            path='/blogs/new'
            element={<Blog />}
            />
          <Route
            path='/blogs/:id'
            element={<NewBlog />}
            />
          <Route
            path='/blogs/:id/edit'
            element={<EditBlog />}
            />
        </Routes>
      </Router>
    </div>
  );
}


