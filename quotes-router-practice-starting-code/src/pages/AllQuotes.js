import React from 'react'
import QuoteList from '../components/quotes/QuoteList';
const DUMMY=[
    {id:'1',author:'redeye',text:"Hi there"},
    {id:'2',author:'red',text:"Hi here"},
    {id:'3',author:'eye',text:"Hi "}
  ]
function AllQuotes() {
    return (
        <div>
            <QuoteList quotes={DUMMY}/>
        </div>
    )
}

export default AllQuotes
