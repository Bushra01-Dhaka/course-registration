import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-2/3 mx-auto">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default Cards;