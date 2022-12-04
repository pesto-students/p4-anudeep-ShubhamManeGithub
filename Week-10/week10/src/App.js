import React, {useState}from 'react';
import './App.css';
import ShortenIt from './ShortenIt.js';
import Shortenlink from './Shortenlink.js';

function App() {
  const [inputValue, setInputValue] = useState("")
  return (<>
    <div className="App">
      <div className='Header'>
        <div className='start'>Shortly</div>
        <div className='mid'>
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className='end'>
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </div>
      <div className='Main'>
        <ShortenIt setInputValue={setInputValue}/>

        <div className='outputbox'>
        <Shortenlink inputValue={inputValue}/> 

        </div>
      </div>
      <div className='Footer'>
        <div className='start'>Shortly</div>
        <div className='mid'>
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className='end'>
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;

