import React , { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';


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
        totalPrice: 2,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    addIngredientHander = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = PRICE_OF_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        let updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = PRICE_OF_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceSubtraction;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }
    purchaseContinueHandler = () => {
        //alert('Continue is working man.');
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Shoaib Jalal',
                address: {
                    street: 'DreamStreet',
                    postalCode: '00707'
                },
                phone: '00304555'
            },
            deliveryMethod: 'TakeAway'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            });
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary ingredients={ this.state.ingredients } purchaseCancelled={ this.purchaseCancelHandler } purchaseContinued={ this.purchaseContinueHandler } price={ this.state.totalPrice } />

        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        return (
            <Fragment>
              <Modal display={ this.state.purchasing } modalClosed={ this.purchaseCancelHandler }>
                { orderSummary }
              </Modal>
              <Burger ingredients={ this.state.ingredients } />
              <BurgerControls ingredientAdded={ this.addIngredientHander } ingredientRemoved={ this.removeIngredientHandler } disabled={ disabledInfo } price={ this.state.totalPrice } purchasable={ this.state.purchasable }
                ordered={ this.purchaseHandler } />
            </Fragment>
            );
    }

}
export default BurgerBuilder;