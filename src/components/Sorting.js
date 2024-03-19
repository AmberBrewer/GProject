import React from "react";
//import Dropdown from 'react-bootstrap/Dropdown'; <-- wasn't working

function Sorting(){
    
    return(
        <div className="row">
            <div className="col-sm-10"></div>
            <div className="col-sm-4">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="sortingMenu">Sort</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">By Highest-Lowest</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">By Lowest-Highest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
export default Sorting;