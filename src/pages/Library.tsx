import { getDocs } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";
import "../styles/Card.css";
import { CardDisplay } from "../components/CardDisplay";

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
  useEffect(() => {}, [clickedCardData]);

  /**
   * Handling click on single card: displaying blur background & card data
   * @param cardData
   */
  const handleCardClick = (cardData: ICard) => {
    setClickedCardData(cardData);
    setIsCardClicked(true);
  };

  const handleCloseDisplayClick = () => {
    setIsCardClicked(false);
  };

  return (
    <>
      {isCardClicked && (
        <div className="background-blur">
          <CardDisplay
            cardData={clickedCardData}
            clickFunction={handleCloseDisplayClick}
          />
        </div>
      )}

      <div className="flex container-library">
        {cardsList.map((card) => {
          return <Card cardData={card} clickFunction={handleCardClick} />;
        })}
      </div>
    </>
  );
};
