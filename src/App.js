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
    const [checkOut, setcheckOut] = React.useState([{
        title:"",
        price:""
    }])

    function AddToCheckOut(currentGrocery){
        console.log(currentGrocery);
        setCount(PrevCounter => PrevCounter + 1)
        setcheckOut(prevcheckOut => [...prevcheckOut, checkOut])
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
                <GroceryList addFunc={AddToCheckOut}/>
            </div>
            <div className="col-sm-4 checkout">
                {showCheckOut && <CheckOut showBoolean={showCheckOut} displayElement={checkOut}/>}
            </div>
        </div>
    </div>
)   

} export default App