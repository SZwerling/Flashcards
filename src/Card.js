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
         className='flip-card-inner'
            onClick={() => setFlip(!flip)}
         >
            <div style={{padding:"100px"}} className="flip-card-front">{FLASHCARDS[index].front}</div>
            <div style={{padding:"100px"}} className="flip-card-back">{FLASHCARDS[index].back}</div>
         </div>
      );
   }

   return (
      <div>
         <button className="btn" onClick={() => next()}>Next</button>
         <div className="flip-card">         
               <RenderCard />
         </div>
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