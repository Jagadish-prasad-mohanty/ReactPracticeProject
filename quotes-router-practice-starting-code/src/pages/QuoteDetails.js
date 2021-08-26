import React  from 'react'
import { Link, Route, useParams ,useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuote from './NoQuote';
const DUMMY=[
    {id:'1',author:'redeye',text:"Hi there"},
    {id:'2',author:'red',text:"Hi here"},
    {id:'3',author:'eye',text:"Hi "}
  ]
function QuoteDetails(props) {
    const param=useParams();
    const match= useRouteMatch();
    console.log(match);
    const path=`${match.url}/comments`;
    console.log(path);
    // console.log(DUMMY.findIndex(quote=>quote.id===param.quoteID));
    const reqQuote=DUMMY.find(quote=>quote.id===param.quoteID);
    if (!reqQuote){
        return <NoQuote/>
    }
    return (
        <>
            <HighlightedQuote details={{author:reqQuote.author,text:reqQuote.text}}/>
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={path}>Load Comment</Link>
                </div>
            </Route>
                
            <Route path={path}>
                <Comments/>
            </Route>
        </>
    )
}

export default QuoteDetails