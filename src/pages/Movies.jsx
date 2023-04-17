import { useEffect, useState } from 'react';
import { searchMovie } from 'services/getMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Gallery,
  GalleryItem,
  MovieTitle,
  Poster,
} from 'components/MovieGallery/MovieGallery.styled';
import {
  ButtonForm,
  FormSearch,
  InputSearch,
} from 'components/MoviePage/MoviePage.styled';

const { useSearchParams, useLocation } = require('react-router-dom');

const notify = () => toast.warn('No results found for your query.');

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleChange = ({ target }) => {
    setSearchParams({ name: target.value });
  };
  const query = searchParams.get('name');

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovie(query).then(data => {
        if (data.length === 0) {
          notify();
        } else setMovies(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [query]);
  return (
    <>
      <FormSearch>
        <InputSearch type="text" onChange={handleChange} />
        <ButtonForm type="submit" />
      </FormSearch>
      {movies.length > 0 && (
        <Gallery>
          {movies.map(movie => (
            <GalleryItem
              key={movie.id}
              to={`${movie.id}`}
              state={{ from: location }}
            >
              <Poster
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                width={200}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </GalleryItem>
          ))}
        </Gallery>
      )}
      <ToastContainer />
    </>
  );
};
export default Movies;
