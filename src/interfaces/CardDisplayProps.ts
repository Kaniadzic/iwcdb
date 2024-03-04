import { Card } from "./Card";

export interface CardDisplayProps {
    cardData: Card | null,
    clickFunction: Function
}