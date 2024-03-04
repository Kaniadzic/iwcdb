import { Card as ICard } from "../interfaces/Card";
import { CardProps } from "../interfaces/CardProps";
import "../styles/Card.css";

export const Card = (props: CardProps) => {
    return (
        <div className="flex" onClick={() => { props.clickFunction(props.cardData) }}>
            <img src={props.cardData.imageUrl} className="image-card" />
        </div>
    );
};