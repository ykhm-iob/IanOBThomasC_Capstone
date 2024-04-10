import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="invisible md:visible sticky
    top-0 bg-backdropColor bg-opacity-40 flex flex-nowrap justify-between p-5 text-titleColor hover:bg-opacity-100">
      <nav className="invisible md:visible sticky
      top-0 bg-backdropColor bg-opacity-40 flex flex-nowrap justify-between p-5 text-titleColor hover:bg-opacity-100">
        <h1 className="uppercase">Ed Steers Jr.'s Site</h1>
        <div className="px-3 space-x-4 gap-20">
          <Link className=" hover:text-linkColor" to="/">Home</Link>
          <Link className=" hover:text-linkColor" to="/books">Books Page</Link>
          <Link className="hover:text-linkColor" to="/about">About Me</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;