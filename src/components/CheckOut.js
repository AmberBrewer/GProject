

function CheckOut(props){
   const checkOutMap = props.displayElement.map((currentItem) =>{
    return <div className="container">
        <p>{currentItem.title}: ${currentItem.price}</p>
    </div>
   })  
   
    console.log(props)
    return (
        
        <div className="col-sm-4 Checkout">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {checkOutMap}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>Sub-Total: ${props.setSubTotal.toFixed(2)}</p>
                        <p>Total: ${props.setTotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CheckOut;