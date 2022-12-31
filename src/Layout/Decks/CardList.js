import React from "react";
import CardDetails from "./CardDetails";
import CardDetailsForm from "./CardDetailsForm";

function CardList({ deck, deleteHandler }) {
  let rows = deck.cards?.map((card) =>
    CardDetails({ ...card, deckId: deck.id, deleteHandler })
  );

  //If there are no cards, add skeleton cards
  if (!deck.name) {
    rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(<CardDetailsForm key={i} />);
    }
  }

  return (
    <>
      <h2 className='mt-4'>Cards</h2>
      {rows}
    </>
  );
}

export default CardList;