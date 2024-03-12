import { Card as ICard } from "../interfaces/Card";
import { CardProps } from "../interfaces/CardProps";
import "../styles/Card.css";

export const Card = (props: CardProps) => {
  return (
    <div className="flex container-card">
      <img
        src={props.cardData.imageUrl}
        className="image-card"
        onClick={() => {
          props.clickFunction(props.cardData);
        }}
      />
    </div>
  );
};
