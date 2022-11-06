import React, { useState, useEffect } from "react";
import ShortenIt from "./ShortenIt";

function Shortenlink({ inputValue }) {
    const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    const [shortenLink, setShortenLink] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const fetchData = async () => {
   
    fetch("https://api.shrtco.de/v2/shorten?url=" + inputValue)
      .then((res) => res.json())
      .then(
        (data) => {
          setItems((items) => [
            ...items,
            {
              
              short_link: data.result.full_short_link,
              long_url: inputValue,
              
            }, setShortenLink(data.result.full_short_link)
          ]);
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }; 
    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue])
  

    if (loading){
        return <p>loading...</p>
    }
    if (error){
        return <p>something went wrong...</p>
    }
    return (<>
        <div>Entered Link: <a href={inputValue}>{inputValue}</a> </div>
        <br/>
        <div>Shorten Link: <a href={shortenLink}>{shortenLink} </a></div>
        </>
    )
}
export default Shortenlink;