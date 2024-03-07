import { CardDisplayProps } from "../interfaces/CardDisplayProps";
import { FactionIcons } from "./FactionIcons";

/**
 * 
 * @param subTypesArray 
 * @returns 
 */
const formatSubTypes = (subTypesArray: string[] | null | undefined): string => {
    let subtypes = "";

    /**
     * Formatting subTypes array to string
     */
    subTypesArray?.forEach((subtype) => {
        subtypes += `${subtype} `;
    });

    return subtypes;
}

export const CardDisplay = (props: CardDisplayProps) => {
  return (
    <div className="flex card-display-container">
      <div className="flex column card-display-left">
        <img src={props.cardData?.imageUrl} />
      </div>

      <div className="flex column card-display-right">
        <div className="flex card-display-top">
            <button className="button-close-display" onClick={() => {props.clickFunction()}}>✕</button>
        </div>
        <h2>{props.cardData?.name}</h2>
        <h4>
          {props.cardData?.superType} {props.cardData?.type} -{" "}
          {formatSubTypes(props.cardData?.subTypes)}
        </h4>

        <FactionIcons factionsArray={props.cardData?.purity} />

        <p>— Rarity: {props.cardData?.rarity}</p>
        <p>— Resource cost: {props.cardData?.resourceCost} </p>

        {/* Attack, health morale cost and attributes are displayed only for Character cards */}
        {props.cardData?.type == "Character" && (
          <>
            <p>— Health: {props.cardData?.health} </p>
            <p>— Attack: {props.cardData?.attack} </p>
            <p>— Morale cost: {props.cardData.moraleCost} </p>
            <p>— Attributes: {props.cardData.attributes?.toString()} </p>
          </>
        )}

        <p>— Card: {props.cardData?.setNumber} of {props.cardData?.setName} set </p>
      </div>
    </div>
  );
};
