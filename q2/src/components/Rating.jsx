import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../features/rating/ratingSlice';

const Rating = () => {
  const dispatch = useDispatch();
  const activeStars = useSelector((state) => state.rating.activeStars);

  const handleStarClick = (index) => {
    dispatch(setRating(index + 1));
  };

  return (
    <div id="rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < activeStars ? 'active' : ''}
          onClick={() => handleStarClick(index)}
        >
            &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
