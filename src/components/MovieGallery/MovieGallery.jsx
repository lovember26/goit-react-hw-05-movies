import { useLocation } from 'react-router-dom';
import {
  Gallery,
  GalleryItem,
  GalleryTitle,
  MovieTitle,
  Poster,
} from './MovieGallery.styled';
import PropTypes from 'prop-types';

const MovieGallery = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <>
      <GalleryTitle>Trending Today</GalleryTitle>

      <Gallery>
        {trendingMovies?.map(movie => (
          <GalleryItem
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <Poster
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              width={200}
            />
            <MovieTitle>{movie.title || movie.name}</MovieTitle>
          </GalleryItem>
        ))}
      </Gallery>
    </>
  );
};
MovieGallery.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.shape),
};

export default MovieGallery;
