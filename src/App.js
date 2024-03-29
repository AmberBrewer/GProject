import React from "react"
import './styles.css'
import Header from "./components/Header"
import CheckOut from "./components/CheckOut"
import MenuItemBoxes from "./components/MenuItemBoxes"
import GroceryList from "./components/MenuCards"
import Sorting from "./components/Sorting"

function App(){
    const [counter, setCount] = React.useState(0)
    const [showCheckOut,setShowCheckOut] = React.useState(false)
    const [checkOut, setcheckOut] = React.useState([])
    const [total, setTotal] = React.useState(0.00)
    const [subTotal, setSubTotal] = React.useState(0.00)

    function AddToCheckOut(title, price){
        setCount(PrevCounter => PrevCounter + 1)
        setcheckOut(prevcheckOut => [...prevcheckOut, {
            title: title,
            price: price
        }])
        let cost =+ price;
        setSubTotal(prevSub => prevSub +cost);
        let totaling = cost * 0.07;
        let tot = cost + totaling;
        setTotal(prevTotal => prevTotal +tot);
        console.log(total);
        console.log(subTotal);
        console.log(checkOut)
    }
    function ShowCheckOut(){
        setShowCheckOut(prevShowCheckOut => !prevShowCheckOut)
        console.log(showCheckOut)

    }

return(
    <div className="fluid-container ">
        <div className="row">
            <Header showFunc={ShowCheckOut} number={counter}/>
        </div>
        <div className="row">
           <div className="col-sm-6"></div>
           <div className="col-sm-6">
            <button className="uselessSortButton">Filter</button>
           </div>
        </div>
        <div className="row">
            <div className="col-sm-8">
                {/* MenuItemBoxes is called here to be shown on App, it is also called into the specific space since col-sm-12 is being used */}
                <GroceryList addFunc={AddToCheckOut} />
            </div>
            <div className="col-sm-4 checkout">
                {showCheckOut && <CheckOut showBoolean={showCheckOut} displayElement={checkOut} setSubTotal={subTotal} setTotal={total}/>}
            </div>
        </div>
    </div>
)   

} export default App