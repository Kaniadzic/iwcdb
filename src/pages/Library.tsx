import { getDocs } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";
import "../styles/Card.css";

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

  return (
    <div className="flex container-library">
      {cardsList.map((card) => {
        return <Card cardData={card} clickFunction={handleCardClick} />;
      })}

      {isCardClicked && (
        <div className="flex background-blur">
          <div className="flex card-display-container">
            <div className="flex column card-display-left">
              <img src={clickedCardData?.imageUrl} />
            </div>

            <div className="flex column">
              <div className="flex column card-display-right">
                <p>{clickedCardData?.name}</p>
                <p>— Rarity: {clickedCardData?.rarity}</p>
                <p>— Purity: </p>
                <p>— Health: {clickedCardData?.health} </p>
                <p>— Attack: {clickedCardData?.attack} </p>
                <p>— </p>
                <p>— </p>
                <p>— </p>
              </div>
              <div className="flex column card-display-bottom">
                <p
                  onClick={() => {
                    setIsCardClicked(false);
                  }}
                >
                  Click to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
