import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const[markdown ,setmarkdown] = useState('');

  const handchange = (event) =>{
    setmarkdown(event.target.value);
  }
  return (
    <div className="App">
    <div className='left'>
      <h3>Enter a markdown Value</h3>
    <textarea value={markdown} onChange={handchange} />
    </div>
    
     {console.log(markdown)}
     <div className='right'>
      <h1>Markdown Result </h1>
     <ReactMarkdown >{markdown}</ReactMarkdown>
     </div>
     
    </div>
  );
}

export default App;
