import React from 'react';

import classes from './Modal.css';

const modal = (props) => (
    <div 
    className = {classes.Modal}
    style = {{
        transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.display ? '1': '0'
    }}>
        {props.children}
    </div>
);

export default modal;