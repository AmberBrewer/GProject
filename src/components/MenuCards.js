import MenuItemBoxes from "./MenuItemBoxes"

//objects or (menuitems) for array organization
const itemList = [
    {
        picture:'milk.jpg',
        title: "Milk",
        foodType: "dairy",
        price: "6.99"
    },
    {
        picture:"yogurt.jpg",
        title: "Yogurt",
        foodType: "dairy",
        price: "5.49"
    },
    {
        picture:"gouda.jpg",
        title: "Gouda Cheese",
        foodType: "dairy",
        price: "4.74"
    },
    {
        picture:"butter.jpg",
        title: "Butter",
        foodType: "dairy",
        price: "4.66"
    },
    {
        picture:"eggs.jpg",
        title: "Dozen eggs",
        foodType: "dairy",
        price: "4.82"
    },
    {
        picture:"sugar.jpg",
        title:"Sugar",
        foodType:"Carbohydrate",
        price: "4.80"
    },
    {
        picture:"flour.jpg",
        title:"Flour",
        foodType:"Grains",
        price: "4.99"
    },
    {
        picture:"celery.jpg",
        title:"Celery",
        foodType:"Vegetable",
        price: "2.09"
    },
    {
        picture:"carrots.jpg",
        title:"Carrots",
        foodType:"Vegetable",
        price: "6.29"
    },
    {
        picture:"squash.jpg",
        title:"Squash",
        foodType:"Vegetable",
        price: "4.00"
    },
    {
        picture:"zucchini.jpg",
        title:"Zucchini",
        foodType:"Vegetable",
        price: "7.19"
    },
    {
        picture:"pudding.jpg",
        title:"Pudding",
        foodType:"Dessert",
        price: "20.99"
    }
]

function GroceryList(props){
    /* ItemList is a parameter that "contains or holds" the item information. ie: (price) is a number, (title) is a string */
    /* MenuItems.map function is a "method" which is simply the information passed which is then mapped through like an array. */
    const MenuItemDataMap = itemList.map((currentGrocery) => {
        return <MenuItemBoxes
        picture = {currentGrocery.picture}
        title = {currentGrocery.title}
        price = {currentGrocery.price}
        foodType = {currentGrocery.foodType}
        addToCheckOut={props.addFunc}
        />

        }
    )
    // ^^^ These are seen as PROPS ^^^
    // Data is now pushed as (props) ie: ".title" , ".price" , etc.
    // while (ItemList) is now seen as new array name so its easier to understand,
    // why the information is sent through as (props) and not (raw data) from before.
    
    return (
        <div className="row">
            {MenuItemDataMap}
        </div>
    )
}

export default GroceryList;