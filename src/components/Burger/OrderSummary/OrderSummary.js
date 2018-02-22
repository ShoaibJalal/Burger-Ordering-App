import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (<li key = {igKey}>
                        <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>);
        });
    return (
        <Fragment>
            <h4>Your Order Summary</h4>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = 'Success' clicked = {props.purchaseContinued}>Continue</Button>
            <Button btnType = 'Danger' clicked = {props.purchaseCancelled}>Cancel</Button>
        </Fragment>
    );
};

export default orderSummary;