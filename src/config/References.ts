import { collection } from "firebase/firestore";
import { db } from "./Config";

export const cardsRef = collection(db, "cards");