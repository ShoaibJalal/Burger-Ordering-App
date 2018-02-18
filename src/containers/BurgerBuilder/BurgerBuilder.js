import React , {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

const PRICE_OF_INGREDIENTS = {
    salad: 0.8,
    chicken: 1.4,
    meat: 1.2,
    cheese: 0.6
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            chicken: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    }
    
    addIngredientHander = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = PRICE_OF_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});

    };

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        let updatedCount = oldCount - 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = PRICE_OF_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceSubtraction;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
    };


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        return(
            <Fragment> 

                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls
                    ingredientAdded = {this.addIngredientHander}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo} />

            </Fragment>
        );
    }

}
export default BurgerBuilder;