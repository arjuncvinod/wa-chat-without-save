import './App.css';
import React,{useState} from 'react';

function App() {
const [countryCode,setcode]=useState("+91")
const [no,setNo]=useState("")

  function setCountry(e){
    setcode(e.target.value)
  }

  function handleChange(e){
   setNo(e.target.value);
  }
  return (
    <main>
      <div className="header">
        <img src="wa.png" alt="" />
        <h1> Chat without saving the number</h1>
      </div>
      <div className="container">
        <div>
          <input type="text" onChange={setCountry} value={countryCode} />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the number"
          />
        </div>
        <a href={`https://wa.me/${countryCode}${no}`}>
          <button>Chat</button>
        </a>
      </div>
      <div class="copyright">
        <p class="made">Made with 💚 by <a href='https://arjuncvinod.netlify.app'>Arjun</a></p>
        <p>
          Copyright &copy; 2023
        </p>
      </div>
    </main>
  );
}

export default App;
