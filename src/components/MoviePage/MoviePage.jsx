import {
  AdditionalBtn,
  AdditionalList,
  AdditionalNavLink,
  AdditionalTitle,
  MovieContainer,
} from './MoviePage.styled';

const MoviePage = ({ movie }) => {
  return (
    <>
      <MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {Math.round(movie.vote_average * 10)}&#37;</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres?.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </MovieContainer>
      <AdditionalList>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalBtn>
          <AdditionalNavLink to="cast">Cast</AdditionalNavLink>
          <AdditionalNavLink to="reviews">Reviews</AdditionalNavLink>
        </AdditionalBtn>
      </AdditionalList>
    </>
  );
};

export default MoviePage;
