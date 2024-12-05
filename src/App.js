import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.navlink}>Home</Link>
          <Link to="/projects" style={styles.navlink}>Projects</Link>
          <Link to="/about" style={styles.navlink}>About</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    background: '#333',
    padding: '10px',
  },
  navlink: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
