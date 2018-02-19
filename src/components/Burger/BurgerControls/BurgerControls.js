import React from 'react';

import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Chicken', type: 'chicken'},
    {label: 'Meat', type: 'meat'},
];

const burgerControls = (props) => (

    <div className = {classes.BurgerControls}>

        <p>Burger Price: <strong> {props.price.toFixed(2)} </strong></p>

        {controls.map(control => (
            <BurgerControl 
                key = {control.label} 
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}
                removed = {() => props.ingredientRemoved(control.type)}
                disabled = {props.disabled[control.type]} />
        ))}
        {/* Button for showing modal and Ordering burger */}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick = {props.ordered}>ORDER NOW</button>

    </div>

);
export default burgerControls;