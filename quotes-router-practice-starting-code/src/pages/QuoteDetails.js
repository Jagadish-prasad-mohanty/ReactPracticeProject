import React ,{useEffect} from 'react'
import { Link, Route, useParams ,useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuote from './NoQuote';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';

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
    const {sendRequest,status,data:responseData,error}=useHttp(getSingleQuote,true);
    useEffect(() => {
        sendRequest(param.quoteID);
    }, [sendRequest])

    console.log("[quoteDetails.js]",responseData);
    if (status==='pending'){
        return <div style={{textAlign:'center'}}><LoadingSpinner/></div>
    }
    if (error){
        return <p style={{textAlign:'center'}}>{error}</p>
    }
    // console.log(DUMMY.findIndex(quote=>quote.id===param.quoteID));
    // const reqQuote=responseData.find(quote=>quote.id===param.quoteID);
    if (!responseData.text){
        return <NoQuote/>
    }
    return (
        <>
            <HighlightedQuote details={{author:responseData.author,text:responseData.text}}/>
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={path}>Load Comment</Link>
                </div>
            </Route>
                
            <Route path={path}>
                <Comments id={param.quoteID}/>
            </Route>
        </>
    )
}

export default QuoteDetails