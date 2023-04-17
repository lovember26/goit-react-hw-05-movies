import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getMovies';
import { Author, ReviewCard, ReviewContainer } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    try {
      getReviews(movieId).then(data => {
        setReviews(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <ReviewContainer>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewCard key={review.id}>
            <Author>{review.author}</Author>
            <p>{review.content}</p>
          </ReviewCard>
        ))
      ) : (
        <p> No reviews.</p>
      )}
    </ReviewContainer>
  );
};
export default Reviews;
