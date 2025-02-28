import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [form, setForm] = useState({ 
    title: "", 
    director: "", 
    genre: "Action", 
    releaseYear: "", 
    synopsis: "", 
    posterUrl: "" 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", form);
    navigate("/"); // Navigate back to Dashboard page after submission
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" value={form.director} onChange={handleChange} required />
        <select name="genre" value={form.genre} onChange={handleChange} required>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={form.releaseYear} onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" value={form.synopsis} onChange={handleChange} required />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" value={form.posterUrl} onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
