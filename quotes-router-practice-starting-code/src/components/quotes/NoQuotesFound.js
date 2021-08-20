import classes from './NoQuotesFound.module.css';
// import { Redirect } from 'react-router-dom'
// import { useState } from 'react';

const NoQuotesFound = () => {
  // const [hQuote,setHQuote]=useState(false);
  // const onClickHandler= () =>{
  //   console.log('t');
  //   setHQuote(true);
  // }
  // console.log(hQuote);
  // if (hQuote){
  //   console.log("hi");
  //   return (
  //     <Redirect to={{
  //       pathname:'/newquote'
  //     }}/>)
  // }
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      {/* <a onClick={onClickHandler} className='btn'>
        Add a Quote
      </a> */}
    </div>
  );
};

export default NoQuotesFound;
