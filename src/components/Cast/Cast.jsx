import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getMovies';
import { CastCard, CastGallery } from './Cast.style';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    try {
      getCast(movieId).then(data => {
        setCast(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <CastGallery>
      {cast.map(character => (
        <CastCard key={character.id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${character.profile_path}`}
            alt={character.name}
            width={200}
          />
          <p>{character.name}</p>
          <p>Character: {character.character}</p>
        </CastCard>
      ))}
    </CastGallery>
  );
};
export default Cast;
