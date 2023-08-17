import './App.css';
import React,{useState} from 'react';

function App() {
const [no,setNo]=useState("")
  function handleChange(e){
   setNo(e.target.value);
  }
  return (
    <main>
    <div className='container'>
      <input type="text" onChange={handleChange} placeholder='Enter the number'/>
      <a href={`https://wa.me/+91${no}`}>
        <button>Chat</button>
      </a>
      </div>
    </main>
  );
}

export default App;
