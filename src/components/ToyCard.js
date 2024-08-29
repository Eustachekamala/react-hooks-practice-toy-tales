import React from "react";

function ToyCard( { toycard, onToyDeleted, onToyLiked } ) {

  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toycard.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        onToyDeleted(toycard.id);
      });
  };

  const handleLike = () => {
    const updatedLikes = toycard.likes + 1;
    
    fetch(`http://localhost:3001/toys/${toycard.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then(response => response.json())
      .then(updatedToy => {
        onToyLiked(updatedToy);
      });
  };

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
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
