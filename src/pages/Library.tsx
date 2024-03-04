import { getDocs } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";

export const Library = () => {
  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [isCardClicked, setIsCardClicked] = useState<boolean>(false);
  const [clickedCardData, setClickedCardData] = useState<ICard | null>(null);

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

  /**
   * Updating clicked card data on state update
   */
  useEffect(() => {}, [clickedCardData])

  const handleCardClick = (cardData: ICard) => {
    setClickedCardData(cardData);
    setIsCardClicked(true);
  };

  return (
    <div className="flex container-library">
      {cardsList.map((card) => {
        return <Card cardData={card} clickFunction={handleCardClick} />;
      })}

      {isCardClicked && (
        <div className="flex background-blur" onClick={() => {setIsCardClicked(false)} }>
          <div className="flex column">

          </div>
          <div className="flex column">

          </div>
          <p>{ clickedCardData?.name }</p>
          <p>Click anywhere to close</p>
        </div>
      )}
    </div>
  );
};
