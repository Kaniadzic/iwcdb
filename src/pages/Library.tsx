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

  /**
   * Aplying filter - setting filtered list (which is displayed) to new state with only cards described in filters
   */
  const filterCardsList = async (filterValues: CardsFilter) => {
    // filtering by supertype
    let result = cardsList.filter((card) => {
      if (filterValues.superType == "All") {
        return card;
      }
      return card.superType == filterValues.superType;
    });

    // filtering by type
    result = result.filter((card) => {
      if (filterValues.types.length > 0) {
        if (filterValues.types.includes(card.type)) {
          return card;
        }
      } else {
        return card;
      }
    });

    // filtering by rarity
    result = result.filter((card) => {
      if (filterValues.rarities.length > 0) {
        if (filterValues.rarities.includes(card.rarity)) {
          return card;
        }
      } else {
        return card;
      }
    });

    // filtering by set
    result = result.filter((card) => {
      if (filterValues.sets.length > 0) {
        if (filterValues.sets.includes(card.setName)) {
          return card;
        }
      } else {
        return card;
      }
    });

    // filtering by number values (attack, health, cost, morale)
    result = result.filter((card) => {
      if (
        filterValues.attackValues.length > 0 ||
        filterValues.healthValues.length > 0 ||
        filterValues.costValues.length > 0 ||
        filterValues.moraleValues.length > 0
      ) {
        if (filterValues.attackValues.includes(card.attack!.toString())) {
          return card;
        } else if (
          filterValues.healthValues.includes(card.health!.toString())
        ) {
          return card;
        } else if (
          filterValues.moraleValues.includes(card.moraleCost!.toString())
        ) {
          return card;
        } else if (
          filterValues.costValues.includes(card.resourceCost!.toString())
        ) {
          return card;
        }
      } else {
        return card;
      }
    });

    // filtering by purity
    result = result.filter((card) => {
      for (let i = 0; i < filterValues.purity.length; i++) {
        if (
          (filterValues.purity[i] != -1 &&
          card.purity[i] == filterValues.purity[i]) ||
          (
            filterValues.purity[i] == 0 &&
            card.purity[i] >= 0
          )
        ) {
          return card;
        }
      }
    });

    setFilteredCardsList(result);
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
  useEffect(() => {}, [clickedCardData, filteredCardsList]);

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
        <LibraryFilter
          filterFunction={filterCardsList}
          clearFunction={clearFilter}
        />
        <p className="text-cards-quantity">
          Displaying {filteredCardsList.length} cards
        </p>

        {/* Displaying icon on loading */}
        {cardsList.length == 0 && <LoadingIcon />}

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
