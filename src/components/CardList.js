import React from "react";
import Card from "./Card";

const CardList = ({ selectedBoard }) => {
  return (
    <div>
      <h2>Cards for {selectedBoard.title}</h2>
      <section className="card-list">
        {selectedBoard.cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              likeCount={card.likeCount}
              message={card.message}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CardList;
