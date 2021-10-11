import React from 'react';

import './Modal.css';

const modal = (props) => {

    const modalClasses=['Modal',props.modal?"ModalOpen":'ModalClose'];
    return (
    <div className={modalClasses.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
    )
}

export default modal;