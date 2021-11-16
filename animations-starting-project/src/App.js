import React, { Component } from "react";
import Transition from "react-transition-group/transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";


class App extends Component {
  state={
    modalIsOpen:false,
    toggle:false
  }
  openModal=()=>{
    this.setState({modalIsOpen:true})
  }
  closeModal=()=>{
    this.setState({modalIsOpen:false})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" 
        onClick={()=>this.setState(prevState=>{
          console.log(!prevState.toggle)
          return { toggle:!prevState.toggle}})}>
        toggle
        </button>
        <Transition in={this.state.toggle} timeout={1000} mountOnEnter unmountOnExit>
        {state=><div 
        style={{backgroundColor:"green",
        height:100,
        transition:'opacity 1s ease-out',
        opacity:state==='exiting'?0:1,
        width:100,margin:'auto'}}/>}
        </Transition>
        
        <br/>
        
            <Modal model={this.state.modalIsOpen} closed={this.closeModal}/>
            

        {this.state.modalIsOpen && <Backdrop backdrop closed={this.closeModal}/>}
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
