import { Card as ICard } from "../interfaces/Card";
import { CardProps } from "../interfaces/CardProps";

export const Card = (props: CardProps) => {
    return (
        <div className="flex column">
            { props.cardData.name }
            <img src={props.cardData.imageUrl} />
        </div>
    );
};