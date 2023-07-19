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
      <h2>Cards for {selectedBoard.title}</h2>
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
