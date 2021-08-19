import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
const DUMMY=[
  {id:'1',author:'redeye',text:"Hi there"},
  {id:'2',author:'red',text:"Hi here"},
  {id:'3',author:'eye',text:"Hi "}
]
const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {DUMMY.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
