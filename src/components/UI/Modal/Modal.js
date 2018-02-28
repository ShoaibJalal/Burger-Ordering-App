import React, {Component,Fragment} from 'react';

import classes from './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.display !== this.props.display;
    }
    componentWillUpdate(){
        console.log('Modal component will update.');
    }
    render (){
        return (
            <Fragment>
        <Backdrop display = {this.props.display} clicked = {this.props.modalClosed}/>    
        <div 
        className = {classes.Modal}
        style = {{
            transform: this.props.display ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.display ? '1': '0'
        }}>
            {this.props.children}
        </div>
    </Fragment>
        );
    }
}


export default Modal;