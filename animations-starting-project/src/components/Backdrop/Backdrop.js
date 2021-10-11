import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    const backdropClasses=['Backdrop',props.backdrop?"BackdropOpen":'BackdropClose'];
    return (
        <div className={backdropClasses.join(' ')} onClick={props.closed}></div>
    );
}

export default backdrop;