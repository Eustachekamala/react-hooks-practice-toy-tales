import React, { useState} from "react";

function ToyForm( { onToyAdded } ) {
  const [toy, setToy] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    const newToy = { name, image };

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then(response => response.json())
      .then(data => {
        onToyAdded(data);
        setName("");
        setImage("");
      });
  }

  const handleChange = e => {
    setToy({ ...toy, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={toy.name}
          onChange={handleChange}
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={toy.image}
          onChange={handleChange}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
