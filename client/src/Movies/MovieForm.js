import React, { useState } from "react";
import axios from "axios";

const initialMovie = {
  name: "",
  director: "",
  imageUrl: "",
  description: "",
  shipping: ""
};

const MovieForm = props => {
  const [movie, setMovie] = useState(initialMovie);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    setMovie({
      ...movie,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies", movie)
      .then(res => {
        console.log("Movie form response",res);
        props.updateMovies(res.data);
      })
      .catch(err => console.error("Error here!!!!", err));
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
          value={movie.name}
        />
        <div className="baseline" />

        {/* <input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={movie.director}
        />
        <div className="baseline" /> */}
{/* 
        <input
          type="string"
          name="imageUrl"
          onChange={changeHandler}
          placeholder="Image"
          value={movie.imageUrl}
        />
        <div className="baseline" /> */}

        <input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={movie.description}
        />
        <div className="baseline" />

        <input
          type="string"
          name="shipping"
          onChange={changeHandler}
          placeholder="Shipping"
          value={movie.shipping}
        />
        <div className="baseline" />

        <button >Add New movie</button>
      </form>
    </div>
  );
};

export default MovieForm;