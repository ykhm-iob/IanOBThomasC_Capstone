import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ed Steers Jr.'s Site</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/books">Books Page</Link>
        <Link to="/about">About Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;