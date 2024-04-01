import { useState } from 'react';
import PageList from './PageList';
import useFetch from './useFetch';

const Home = () => {
  const [name, setName] = useState(1);
  const {data: pages, isPending, error } = useFetch('http://localhost:8000/books');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div>}
      {pages && <PageList pages={pages} title="All Pages" />}
      <button onClick={()=> setName(2)}>Change ID</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;