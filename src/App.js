import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books';
import About from './About';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/books" element={<Books />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
