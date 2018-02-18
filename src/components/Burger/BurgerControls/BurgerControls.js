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

        {controls.map(control => (
            <BurgerControl 
                key = {control.label} 
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}
                removed = {() => props.ingredientRemoved(control.type)}
                disabled = {props.disabled[control.type]} />
        ))}

    </div>

);
export default burgerControls;