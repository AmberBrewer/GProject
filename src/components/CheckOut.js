

function CheckOut(props){
    const checkOut = props.displayElement.map((currentGrocery) => {
        return <p>
            {currentGrocery.title}
            {currentGrocery.price}
        </p>
        
    })
    console.log(props)
    return (
        
        <div className="col-sm-4 Checkout">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {checkOut}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                       <p>Sub-Total: </p>
                        <p>Total: </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CheckOut;