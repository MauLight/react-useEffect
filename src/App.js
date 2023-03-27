import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("Using the useEffect hook");

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={handleClick} className="btn border rounded-0" >Click me!</button>
      {
        toggle && <h2>Welcome to Little Lemon</h2>
      }
    </div>
  );
}

export default App;
