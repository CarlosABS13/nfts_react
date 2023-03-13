import React from "react";
import "../stylesheets/review.css"
function Review(props){
    return (

<div className="contenedor">
    <div className="card">
        <div className="card--header">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, architecto debitis laudantium sit laborum doloribus.</p>
        </div>
        <div className="card--body">
            <h5>{props.nombre}</h5>
        </div>
        <div className="card--footer">
            <img src={require(`../images/${props.imagen}`)} alt=""  className="img"/>
            <p>{props.rango}</p>
        </div>
    </div>
</div>
    )
    }



export default Review;