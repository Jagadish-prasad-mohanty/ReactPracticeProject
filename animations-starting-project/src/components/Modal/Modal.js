import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const timeOutConstraint={
    enter:400,
    exit:1000
  }
const modal = (props) => {

    // const modalClasses=['Modal',props.modal==='entering'?"ModalOpen":props.model==='exiting'?'ModalClose':null];
    
    // return (
    //     <Transition in={props.model}
    //     timeout={timeOutConstraint} 
    //     mountOnEnter unmountOnExit
    //     onEnter={()=>console.log("On enter")}
    //     onEntering={()=>console.log("On entering")}
    //     onEntered={()=>console.log("On entered")}
    //     onExit={()=>console.log("On exit")}
    //     onExiting={()=>console.log("On exiting")}
    //     onExited={()=>console.log("On exited")}
    //     >
    //       {state=>{
    //         const modalClasses = [
    //             "Modal",
    //             state === "entering"
    //             ? "ModalOpen"
    //             : state === "exiting" ? "ModalClose" : null
    //         ];
    //          return (<div className={modalClasses.join(' ')}>
    //             <h1>A Modal</h1>
    //             <button className="Button" onClick={props.closed}>Dismiss</button>
    //         </div>)
    //       }
    //         }
    // </Transition>
    // )
    /* .fade-slide-enter/exit these are removed after one frame and can be used for initialisation */
    return (
        <CSSTransition in={props.model}
        timeout={timeOutConstraint} 
        mountOnEnter unmountOnExit
        // classNames="fade-slide"   // fade-slide-enter/exit or fade-slide-enter/exit-active
        classNames={{
            enter:"",
            enterActive:"ModalOpen",
            exit:"",
            exitActive:"ModalClose"

        }}
        ><div className='Modal'>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
    </CSSTransition>
    )
}

export default modal;