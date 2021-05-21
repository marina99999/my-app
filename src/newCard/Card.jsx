import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import axios from 'axios';
import data from '../assets/CardData.json';


export default function Card(props) {


    return(
        <div className="card text-center">
        <div className="overflow">
        <img src={`./images/${data[props.index].image}`} alt='img1' className="card-img-top"/>
    
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{data[props.index].name}</h4>
        <p className="card-text text-secondary">
        {data[props.index].name} has...
        </p>
        <button onClick={props.handleOnClick} className="btn btn-outline-success">
        Higher</button>
        <p className="card-text text-secondary">
        searches {props.clicked ? data[props.index].google : ""}
        </p>
        </div>
        </div>
    );
}

    