import { db } from "../config/Config";
import { getDocs, getDoc } from "firebase/firestore";
import { Card } from "../components/Card";
import { Card as ICard } from "../interfaces/Card";
import { useEffect, useState } from "react";
import { cardsRef } from "../config/References";

export const Library = () => {
    const [cardsList, setCardsList] = useState<ICard[]>([]); 

    useEffect(() => {
        console.log("INIT");
        getCards();
    }, []);

    const getCards = async () => {
        const data = await getDocs(cardsRef);
        data.docs.forEach((doc) => {
            console.log(doc.data());
        })
    };
    
    return (
        <div className="flex">
            librarby
        </div>
    );
}