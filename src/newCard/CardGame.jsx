import { useState } from 'react';
import Card from './Card';

export default function CardPair(){
    const [index, setIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(true);
    }

    const onClick = () => {
        setIndex(index + 2);
        setClicked(false);
    }

    return(
        <div>
            <Card index={index} clicked={clicked} handleOnClick={handleOnClick}/>
            <Card index={index + 1} clicked={clicked} handleOnClick={handleOnClick}/>
            <button onClick={onClick}>Next</button>
        </div>
    );
}
