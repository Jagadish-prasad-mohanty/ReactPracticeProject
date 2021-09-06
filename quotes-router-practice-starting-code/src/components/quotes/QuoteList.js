import { Fragment } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  // const match=useRouteMatch();
  // console.log(match);
  console.log(props.quotes);
  const location=useLocation();
  const history=useHistory();
  const queryParams=new URLSearchParams(location.search);
  const isAsc= queryParams.get('sort')==='asc';
  const sortQuotes= (quotes,isAsc) =>{
    return quotes.sort((qA,qB)=>{
      if (isAsc){
        return qA.id>qB.id?1:-1;
      }
      else{
        return qB.id>qA.id?1:-1;
      }
    })
  }
  const sortedQuotes=sortQuotes(props.quotes,isAsc);
  const onClickHandler = () =>{
    // history.push(`${location.pathname}?sort=${isAsc?'desc':'asc'}`)
    history.push({
      pathname:location.pathname,
      search:`sort=${isAsc?'desc':'asc'}`
    })
  }
  if (props.isLoading){
    return <LoadingSpinner/>
  }
  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={onClickHandler}>Sort {isAsc?'Descending':'Ascending'}</button>
    </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
