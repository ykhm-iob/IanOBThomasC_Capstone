import { useState, useEffect } from 'react';
import PageList from './PageList';

const Home = () => {
  const [pages, setPages] = useState([
    { title: 'Books Page', body: 'Test', id: 1 },
    { title: 'About Me Page', body: 'Test', id: 2 }
  ]);

  const [name, setName] = useState(1);

  const handleTest = (id) => {
    const newPages = pages.filter(page => page.id !== id);
    setPages(newPages);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <PageList pages={pages} title="All Pages" handleTest={handleTest} />
      <button onClick={()=> setName(2)}>Change ID</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;