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
    const [selected,setSelected] = React.useState(false)
    function AddToCheckOut(){
        setCount(PrevCounter => PrevCounter + 1)
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
            <Sorting/>
        </div>
        <div className="row">
            <div className="col-sm-8">
                {/* MenuItemBoxes is called here to be shown on App, it is also called into the specific space since col-sm-12 is being used */}
                <GroceryList addFunc={AddToCheckOut}/>
            </div>
            <div className="col-sm-4 checkout">
                {showCheckOut && <CheckOut showBoolean={showCheckOut}/>}
            </div>
        </div>
    </div>
)   

} export default App