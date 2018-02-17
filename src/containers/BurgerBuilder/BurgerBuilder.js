import React , {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            chicken: 1,
            cheese: 1,
            meat: 0
        }
    }

    render(){
        return(
            <Fragment> 

                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls/>

            </Fragment>
        );
    }

}
export default BurgerBuilder;