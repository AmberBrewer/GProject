import React from "react";


function MenuItemBoxes(props){
    

    return (
        <div className="col-sm-3 box">
            <div className="container ">
                {/*Image*/}
                <div className="row">
                    <img className="itemPicture" src={require(`./images/${props.picture}`)} alt="Menu Item"/>
                </div>

                <div className="row Price">
                    <div className="col-sm-12 ItemName">
                        <h4>{props.title}</h4>
                    </div>

                    <div className="col-sm-12 Price">
                        <h6>{props.price}</h6>
                    </div>

                    <div className="col-sm-12 HealthFacts">
                        <h5>{props.foodType}</h5>
                    </div>
                    <div className="col-sm-12">
                        <button onClick={props.AddToCheckOut}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemBoxes;