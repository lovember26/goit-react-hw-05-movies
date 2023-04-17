import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from 'services/getMovies';
import { Suspense } from 'react';
import MoviePage from 'components/MoviePage/MoviePage';
import { GoBackBtn } from 'components/MoviePage/MoviePage.styled';
const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      getMovie(params.movieId).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params.movieId]);
  return (
    <>
      <GoBackBtn to={backLinkLocationRef.current}>go back</GoBackBtn>

      <MoviePage movie={movie} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
