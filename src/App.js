import './App.css';
import React,{useState} from 'react';

function App() {
const [no,setNo]=useState("")
  function handleChange(e){
   setNo(e.target.value);
  }
  return (
    <main>
      <input type="text" onChange={handleChange} />
      <a href={`https://wa.me/+91${no}`}>
        <button>Chat</button>
      </a>
    </main>
  );
}

export default App;
