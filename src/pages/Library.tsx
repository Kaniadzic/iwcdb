import { getDocs } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";
import "../styles/Card.css";
import { CardDisplay } from "../components/CardDisplay";
import { LoadingIcon } from "../components/LoadingIcon";
import { LibraryFilter } from "../components/LibraryFilter";
import { CardsFilter } from "../interfaces/CardsFilter";

export const Library = () => {
  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [filteredCardsList, setFilteredCardsList] = useState<ICard[]>([]);
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

        setFilteredCardsList((prev) => [
          ...prev,
          { ...doc.data(), id: doc.id } as ICard,
        ]);
      });
    };

    getCards();
  }, []);

  const testFilter = () => {
    console.log("filter");
    const filteredCards = cardsList.filter((card) => {
      return card.attack != null && card?.attack >= 8;
    });

    setFilteredCardsList(filteredCards);
  };

  /**
   * Aplying filter - setting filtered list (which is displayed) to new state with only cards described in filters
   */
  const filterCardsList = (filterValues: CardsFilter) => {
    console.log(filterValues);
    // testFilter();
  };

  /**
   * Clearing filter - setting filtered list (which is displayed to original list from database)
   */
  const clearFilter = () => {
    setFilteredCardsList(cardsList);
  };

  /**
   * Updating clicked card data on state update
   */
  useEffect(() => {}, [clickedCardData]);

  /**
   * Handling click on single card: displaying blur background & card data
   * @param cardData Data of card to display
   */
  const handleCardClick = (cardData: ICard) => {
    setClickedCardData(cardData);
    setIsCardClicked(true);
  };

  /**
   * Handling click on close display button
   */
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

      <div className="flex column container-library">
        {/* Filters */}
        <LibraryFilter filterFunction={filterCardsList} clearFunction={clearFilter}/>
        <p className="text-cards-quantity">Displaying {filteredCardsList.length} cards</p>

        {/* Displaying icon on loading */}
        {filteredCardsList.length == 0 && <LoadingIcon />}

        {/* Cards Library */}
        <div className="flex display-cards">
          {filteredCardsList.map((card) => {
            return <Card cardData={card} clickFunction={handleCardClick} />;
          })}
        </div>
      </div>
    </>
  );
};
