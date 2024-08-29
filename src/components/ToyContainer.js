import React,{useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const[toys, setToys] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <div id="toy-collection">
      { toys.map((toycard, index) => (
        <ToyCard key={index} toycard={toycard}/>
      ))}
    </div>
  );
}

export default ToyContainer;
