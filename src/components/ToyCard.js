import React,{ useState } from "react";

function ToyCard( {toycard}) {
  const [likes, setLikes] = useState(toycard.likes);

  function handleLike(){
    fetch(`http://localhost:3001/toys/${toycard.id}`, {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({likes : likes + 1})
    })
    .then(res => res.json())
    .then(data => setLikes(data.likes))
    .catch(error => console.error(error))
  }

  return (
    <div className="card" key={toycard.id}>
      <h2>{toycard.name}</h2>
      <img
        src={toycard.image}
        alt={toycard.name}
        className="toy-avatar"
      />
      <p>{toycard.likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"👍"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
