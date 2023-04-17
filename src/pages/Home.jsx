import MovieGallery from 'components/MovieGallery/MovieGallery';
import { useEffect, useState } from 'react';

import { getMovies } from 'services/getMovies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    try {
      getMovies().then(data => {
        setTrendingMovies(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <MovieGallery trendingMovies={trendingMovies} />;
};
export default Home;
