import React from "react";
import Card from "./Card";
import './CardList.css';

const CardList = ({
  selectedBoard,
  onUpdateLikes,
  selectedCardsData,
  onDeleteCard,
}) => {
  return (
    <div>
      {selectedCardsData.length !== 0 && (
      <h2 className="cards-for-label">Cards for {selectedBoard.title}</h2>
      )}
      {selectedCardsData.length === 0 && (
      <h2 className="cards-for-label">Please add a card to {selectedBoard.title}</h2>
      )}
      <section className="card-list">
        {selectedCardsData.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              likesCount={card.likesCount}
              message={card.message}
              onUpdateLikes={onUpdateLikes}
              onDeleteCard={onDeleteCard}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CardList;
