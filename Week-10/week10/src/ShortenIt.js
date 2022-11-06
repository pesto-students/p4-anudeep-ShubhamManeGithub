import React, {useState} from 'react';

let url = "https://api.shrtco.de/v2/shorten?url="
let infoUrl = "https://api.shrtco.de/v2/info?code="



function ShortenIt({setInputValue}){
    const [value,setValue] = useState("")
    const Generate= ()=>{
            setInputValue (value);
            setValue("");
    }
        return ( 
            <div className='inputbox'>
          <form>
            <input 
            type="text" 
             
            placeholder='Enter your link here' 
            value = {value}
            onChange={e=>setValue(e.target.value)}
             />
            
          </form>
          <button onClick={Generate}>Shorten It!</button>
        </div>
    )
}
export default ShortenIt;