import { useDispatch, useSelector } from 'react-redux';
import { flipCard, setCardLength } from '../features/cards/cardSlice';
import { useEffect } from 'react';

const Cards = ({ amount }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards);
  const activeIndex = useSelector((state) => state.activeIndex);

  // console.log(cards);

  const handleCardClick = (index) => {
    if (activeIndex !== index) {
      dispatch(flipCard({ index }));
    }
  };

  useEffect(() => {
    console.log(amount);
    dispatch(setCardLength({amount}));
    
  }, [amount]);
  

  return (
    <table className='cards-table'>
      <tbody>
        <tr>
          {cards.cards.map((card, index) => (
            <td
              className={`card-item ${index === cards.activeIndex ? 'up' : ''}`}
              key={index}
              onClick={() => handleCardClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {card}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Cards;