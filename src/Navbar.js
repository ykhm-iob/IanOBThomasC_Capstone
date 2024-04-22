import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
      <nav className="sticky top-0 p-5 flex justify-between text-titleColor">
        <div>
        <h1 className="uppercase">Ed Steers Jr.'s Site</h1>
        </div>
        <div className="px-3 space-x-4 gap-20">
          <Link className=" hover:text-linkColor" to="/">Home</Link>
          <Link className=" hover:text-linkColor" to="/books">Books</Link>
          <Link className="hover:text-linkColor" to="/about">About</Link>
        </div>
      </nav>
   
  );
}

export default Navbar;