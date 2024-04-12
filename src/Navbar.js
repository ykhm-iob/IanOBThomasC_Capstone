import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sticky top-0 p-5 bg-backdropColor bg-opacity-40 flex justify-between text-titleColor hover:bg-opacity-100">
      <nav className="">
        <div>
        <h1 className="uppercase">Ed Steers Jr.'s Site</h1>
        </div>
        <div className="px-3 space-x-4 gap-20">
          <Link className=" hover:text-linkColor" to="/">Home</Link>
          <Link className=" hover:text-linkColor" to="/books">Books Page</Link>
          <Link className="hover:text-linkColor" to="/about">About Me</Link>
        </div>
      </nav>
      <nav>
      </nav>
    </div>
  );
}

export default Navbar;