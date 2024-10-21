import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdbApi';
import './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovie(details);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <nav>
        <Link to={`/movies/${movieId}/cast`}>Distribuție</Link>
        <Link to={`/movies/${movieId}/reviews`}>Recenzii</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
