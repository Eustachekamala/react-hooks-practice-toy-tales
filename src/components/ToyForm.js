import React, { useState} from "react";

function ToyForm() {
  const [toy, setToy] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newToy = {
      name: formData.get("name"),
      image: formData.get("image"),
    };
    setToy(newToy);
  };

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
