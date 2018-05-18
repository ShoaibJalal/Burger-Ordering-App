import React, { Component, Fragment } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={ igKey }>
                      <span style={ { textTransform: 'capitalize' } }>{ igKey }</span>:
                      { this.props.ingredients[igKey] }
                    </li> );
            });

        return (
            <Fragment>
              <h2>Your Order Summary...</h2>
              <p>Your burger have following ingredients in it:</p>
              <ul>
                { ingredientSummary }
              </ul>
              <p><strong>Total Price: { this.props.price.toFixed(2) }</strong></p>
              <p>Do you want to Checkout...?</p>
              <Button btnType="Danger" clicked={ this.props.purchaseCancelled }>Cancel</Button>
              <Button btnType="Success" clicked={ this.props.purchaseContinued }>Continue</Button>
            </Fragment>
            );
    }
}

export default OrderSummary;