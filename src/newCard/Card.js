import data from '../assets/CardData.json';
import './Card.css';


export default function Card(props) {

    return(
        
        <div className="card-container">
            <div className="image-container">
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
        <h5 className="card-text text-secondary">{props.clicked ? data[props.index].google : "" }</h5>
        searches 
        </p>
        </div>
        </div>

    );
}

    