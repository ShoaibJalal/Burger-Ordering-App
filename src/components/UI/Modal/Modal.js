import React, {Fragment} from 'react';

import classes from './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Fragment>
        <Backdrop display = {props.display} clicked = {props.modalClosed}/>    
        <div 
        className = {classes.Modal}
        style = {{
            transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.display ? '1': '0'
        }}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;