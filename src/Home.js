import { useState } from 'react';
import PageList from './PageList';
import useFetch from './useFetch';
import author_headshot from './Resources/ed-steers-headshot.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState(1);
  const {data: pages, isPending, error } = useFetch('http://localhost:8000/books');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div>}
      <div>
        <img src={author_headshot} alt="Headshot of Portfolio Owner, Ed Steers Jr." />
        <h2 class="text-titleColor">Ed Steers Jr.</h2>
        <p class="text-subtitleColor">A renown author in American history, including Abraham Lincoln, John Wilkes Booth, and World War II</p>
        <button class="text-borderColor"><Link to ="/about">More About Me!</Link></button>
      </div>
      <div>
        <h2>Latest Release</h2>
        <h3>Book Title, Image</h3>
        <p>Short synposis of this book.</p>
        <button><Link to="/books">See All Books!</Link></button>
      </div>
      {pages && <PageList pages={pages} title="All Pages" />}
      <button onClick={()=> setName(2)}>Change ID</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;