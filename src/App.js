import { useEffect, useState } from 'react';
import './App.css';
import { FetchData } from './components/fetch';
import { FetchData2 } from './components/fetch2';
import { FetchData3 } from './components/fetch3';
import { FetchData4 } from './components/fetch4';

function App() {

  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("Using the useEffect hook");

  const handleClick = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to little Lemon" : "Using the useEffect hook";
  }, [toggle])

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={handleClick} className="btn border rounded-0" >Click me!</button>
      {
        toggle && <h2>Welcome to Little Lemon</h2>
      }
      <FetchData />
      <FetchData2 />
      <FetchData3 />
      <FetchData4 />
    </div>
  );
}

export default App;
