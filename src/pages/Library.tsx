import { db } from "../config/Config";
import { getDocs, getDoc } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";

export const Library = () => {
  const [cardsList, setCardsList] = useState<ICard[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);
      data.docs.forEach((doc) => {
        setCardsList((prev) => [...prev, doc.data() as ICard]);
      });
    };

    getCards();
  }, []);

  return (
    <div className="flex column">
      {cardsList.map((card) => {
        return <Card cardData={card}/>;
      })}
    </div>
  );
};
