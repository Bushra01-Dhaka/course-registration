import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({handleSelectBtn}) => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    // w-full md:w-2/3

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[80%]  mx-auto">
            {
                cards.map(card => <Card handleSelectBtn={handleSelectBtn} key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

Cards.propTypes = {
    handleSelectBtn: PropTypes.func
}

export default Cards;