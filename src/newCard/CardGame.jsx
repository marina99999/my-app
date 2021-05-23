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
        <div class="row">
            <Card class="col-sm-6" index={index} clicked={clicked} handleOnClick={handleOnClick}/>
            <Card class="col-sm-6" index={index + 1} clicked={clicked} handleOnClick={handleOnClick}/>
            <button onClick={onClick}>Next</button>
  
        </div>
    );
}
