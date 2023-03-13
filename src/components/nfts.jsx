import React from "react";
import "../stylesheets/nfts.css"

function Nfts(props) {
    return (
        <div className="container rounded-4 color-fondo">
        <div>
            <img src={require(`../images/${props.imagen3}`)} className="principal rounded-4"/>
            <div className="card-body"> 
                <h5 className="equilibrio card-text text white position-relative ml-2">{props.equilibrio}</h5>
                <p className="equlibrio2 card-text text-muted font-size-sm text-white-50">{props.texto}</p>
                <div className="caja d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={require("../images/ethereum.png")} alt="" className="ethereum icon-e "/>
                        <p className="eth card-text text-white text-muted font-size-sm text-white-50">{props.precio}</p>
                    </div>
                    <div className="d-flex">
                        <img src={require("../images/clock.png")} alt="" className="clock icon-c "/>
                        <p className=" cl-text card-text text-white text-muted font-size-sm text-white-50">{props.reloj}</p>
                    </div>
                </div>
                <li className="barra"></li>
                <div className="gap-1 d-flex">
                    <img className="perfil borde border border-white rounded-circle rounded-4"
                        src={require("../images/avatar.png")} alt=""/>
                    <p className="creation m-2 card-text text-muted font-size-sm text-white-50">Creation of</p>
                    <p className="jules m-2 card-text text white position-relative ml-2">{props.nombre}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Nfts;