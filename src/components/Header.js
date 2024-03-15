import React from "react";
import Logo from '../components/images/logo.jpg';

function Header(props){

    return(
        <div className="row header">
            <div className="col-sm-8">
                <img className="logoImage" src={require("./images/logo.jpg")} alt="logo"/>
            </div>
            <div className="col-sm-2 headerButton">
                <button onClick={props.showFunc}>Open/Close CheckOut</button>
            </div>
            <div className="col-sm-2 headerCount">
                <h3>{props.number}</h3>
            </div>
        </div>
    )
}

    
 

export default Header;