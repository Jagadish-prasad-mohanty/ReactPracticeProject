import React from 'react'
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

function QuoteDetails(props) {
    const param=useParams();
    const path=`/quotelist/${param.quoteID}/comments`;
    console.log(path);
    console.log('propssss', props);
    return (
        <>
            <HighlightedQuote details={props.location?.state}/>
            <Link className='btn' to={path}>Comment</Link>
            <Route path={path}>
            <Comments/>
            </Route>
        </>
    )
}

export default QuoteDetails