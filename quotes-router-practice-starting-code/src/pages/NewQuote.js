import { useEffect } from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api'

function NewQuote() {
    const {sendRequest,status,} =useHttp(addQuote);
    const history=useHistory();
    useEffect(()=>{
        if (status=== 'completed'){
            history.push('/quotelist')
        }
    },[history,status])
    const addQuoteHandler= (quote) =>{
        console.log('[NewQuote.js]',quote);
            sendRequest(quote);
        
    }
    return (
        <div>
            <QuoteForm isLoading={status==='pending'} onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQuote;