import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) =>{
                return <BurgerIngredient key = {ingredientKey + i} type = {ingredientKey}/>
            });
        }).reduce((arr , el) => {
            return arr.concat(el)
        }, []);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <h6>Please add some ingredients.</h6>

    }
        //console.log(transformedIngredients);
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type= "breadTop"/>
            {transformedIngredients}
            <BurgerIngredient type= "breadBottom"/>
        </div>
    );
};

export default burger;