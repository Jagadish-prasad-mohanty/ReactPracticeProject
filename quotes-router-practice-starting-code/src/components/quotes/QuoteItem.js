import classes from './QuoteItem.module.css';
import {Link} from 'react-router-dom';
// import HighlightedQuote from './HighlightedQuote';
// import { useState } from 'react';

const QuoteItem = (props) => {
  const path=`/quotelist/${props.id}`;
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
  //       pathname:path,
  //       state:{text:props.text,author:props.author}
  //     }}/>)
  // }
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
        
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={path}>
        View Fullscreen
      </Link>
      
    </li>
  );
};

export default QuoteItem;
