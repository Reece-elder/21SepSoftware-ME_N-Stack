const PizzaOrder = ({flavour, size, stuffed}) => {
    return ( 
        // passing in a String, a number and a boolean
        <div>
            <h2> Pizza Flavour is {flavour}</h2>
            <h2> Pizza size is {size}</h2>
            <h2> Pizza stuffed crust {stuffed}</h2>
        </div>


     );
}
 
export default PizzaOrder;