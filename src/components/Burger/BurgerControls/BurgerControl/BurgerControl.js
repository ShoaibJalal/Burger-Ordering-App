import React from 'react';

import classes from './BurgerControl.css';

const burgerControl = (props) => (

    <div className = {classes.BurgerControl}>
        <div className = {classes.Label}>{props.label}</div>
        
        <button 
        className = {classes.Remove} 
        onClick = {props.removed}
        disabled = {props.disabled} >Remove</button>
        
        <button 
        className = {classes.Add} 
        onClick = {props.added}>Add</button>

    </div>

);

export default burgerControl;