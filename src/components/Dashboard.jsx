import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Movie Collection</h1>
      <Link to="/add-movie">
        <button className="add-movie-button">Add Movie</button>
      </Link>
      <div className="movie-list">
        {/* Example: movies.map(movie => <MovieCard key={movie.id} movie={movie} />) */}
      </div>
    </div>
  );
};

export default Dashboard;
