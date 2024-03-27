import './App.css';

function App() {
  const title = 'Ed Steers Site';
  const test = 10;
  const link = "http://www.google.com";
  
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Site viewed: { test } times</p>

        <p>{ 10 }</p>
        <p>{ "test string" }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
