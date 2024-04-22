import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
      <nav className="sticky  top-0 p-5 bg-backdropColor bg-opacity-60 flex justify-between text-titleColor hover:bg-opacity-100 
      sm:bg-opacity-0 sm:hover:bg-opacity-0">
        <div>
        <h1 className="uppercase font-bold text-xs sm:font-normal sm:text-base">Ed Steers Jr.'s Site</h1>
        </div>
        <div className="px-3 space-x-4 gap-20 text-sm sm:text-base">
          <Link className=" hover:text-linkColor font-bold sm:font-normal" to="/">Home</Link>
          <Link className=" hover:text-linkColor font-bold sm:font-normal" to="/books">Books</Link>
          <Link className="hover:text-linkColor font-bold sm:font-normal" to="/about">About</Link>
        </div>
      </nav>
   
  );
}

export default Navbar;