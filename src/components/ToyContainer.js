import React,{useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then(data => setToys(data));
  }, []);

  const deleteToy = (id) => {
    setToys(toys.filter(toy => toy.id !== id));
  };

   const likeToy = (updatedToy) => {
    setToys(toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy));
  };

  return (
    <div id="toy-collection">
      { toys.map((toycard, index) => (
        <ToyCard key={index} toycard={toycard} onToyDeleted={deleteToy} onToyLiked={likeToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
