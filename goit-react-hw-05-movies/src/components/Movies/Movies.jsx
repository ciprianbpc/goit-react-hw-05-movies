import React, { useState } from 'react';
import { searchMovies } from '../../api/tmdbApi';
import { Link } from 'react-router-dom';
import './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query) {
      try {
        const searchResults = await searchMovies(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  return (
    <div>
      <h1>Caută Filme</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Caută filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Caută</button>
      </form>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
