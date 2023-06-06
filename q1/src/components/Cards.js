import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard } from './cardsSlice';

const Cards = ({ amount }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const activeIndex = useSelector((state) => state.activeIndex);

  const handleCardClick = (index) => {
    if (activeIndex !== index) {
      dispatch(flipCard({ index }));
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          {cards.map((card, index) => (
            <td
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