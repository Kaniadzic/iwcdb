import { db } from "../config/Config";
import { getDocs, getDoc } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";

export const Library = () => {
  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [cardClicked, setCardClicked] = useState<boolean>(false);

  /**
   * loading cards from database
   */
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);
      data.docs.forEach((doc) => {
        setCardsList((prev) => [
          ...prev,
          { ...doc.data(), id: doc.id } as ICard,
        ]);
      });
    };

    getCards();
  }, []);

  const handleCardClick = () => {
    setCardClicked(true);
  };

  return (
    <div className="flex container-library">
      {cardsList.map((card) => {
        return <Card cardData={card} clickFunction={handleCardClick} />;
      })}

      {cardClicked && (
        <div className="flex column background-blur" onClick={() => {setCardClicked(false)} }>
          <p>aaa</p>
          <p>Click anywhere to close</p>
        </div>
      )}
    </div>
  );
};
