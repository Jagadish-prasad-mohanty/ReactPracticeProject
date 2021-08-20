import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
    const addQuoteHandler= (quote) =>{
        console.log('[NewQuote.js]',quote);
    }
    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQuote;