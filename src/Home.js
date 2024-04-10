import author_headshot from './Resources/ed-steers-headshot.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex flex-col gap-36 text-center">
      <img className="rounded-2xl w-2/6 mx-auto md:w-2/12" src={author_headshot} alt="Headshot of Portfolio Owner, Ed Steers Jr." />
      <div className="">
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Ed Steers Jr.</h2>
        <p className="text-subtitleColor text-sm lg:text-lg">A renown author in American history, including Abraham Lincoln, John Wilkes Booth, and World War II</p>
        <button className="button"><Link to ="/about">More About Me!</Link></button>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Latest Release</h2>
        <h3 className="text-titleColor text-2xl font-medium lg:text-4xl">Book Title, Image</h3>
        <p className="text-subtitleColor text-sm lg:text-lg">Short synposis of this book.</p>
        <button className="button"><Link to="/books">See All Books!</Link></button>
      </div>
    </div>
  );
}
 
export default Home;