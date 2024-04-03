import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books';
import About from './About';
import BookInfo from './BookInfo';
import DoesNotExist from './DoesNotExist';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/books" element={<Books />}></Route>
          <Route exact path="/books/:id" element={<BookInfo />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/about/biography" element={<About />}></Route>
          <Route exact path="/about/appearances" element={<About />}></Route>
          <Route exact path="/about/contact" element={<About />}></Route>
          <Route path="*" element={<DoesNotExist />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
