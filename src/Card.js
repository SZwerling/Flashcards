import React, { useState } from "react";

const Card = () => {
   const [flip, setFlip] = useState(false);
   const [index, setIndex] = useState(0);

   if (!FLASHCARDS[index]) {
      setIndex(0);
   }

   function next() {
      setFlip(false);
      setIndex(index + 1);
   }

   function RenderCard() {
      return (
         <div
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => setFlip(!flip)}
         >
            <div className="front">{FLASHCARDS[index].front}</div>
            <div className="back">{FLASHCARDS[index].back}</div>
         </div>
      );
   }

   return (
      <div className="card-grid">
         <button onClick={() => next()}>Next</button>

            <RenderCard />
         
      </div>
   );
};

const FLASHCARDS = [
   {
      id: 0,
      front: "hola",
      back: "hello",
   },
   {
      id: 1,
      front: "rostro",
      back: "face",
   },
   {
      id: 2,
      front: "pie",
      back: "foot",
   },
   {
      id: 3,
      front: "oreja",
      back: "ear",
   },
];

export default Card;

//{flip ? FLASHCARDS[INDEX].front : FLASHCARDS[index].back}