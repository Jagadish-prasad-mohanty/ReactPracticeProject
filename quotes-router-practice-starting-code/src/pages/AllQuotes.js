import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api'
import NoQuoteFound from '../components/quotes/NoQuotesFound';

function AllQuotes() {
    const {sendRequest ,status,data:loadedData,error} =useHttp(getAllQuotes,true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest])
    console.log(status,loadedData);
    if (status==='pending'){
        console.log('hi1');
        return <div style={{textAlign:'center'}}><LoadingSpinner/></div>
    }
    if (error){
        console.log('hi2');
        return <p style={{textAlign:'center'}}>{error}</p>
    }
    if (status==='completed' && (!loadedData || loadedData.length===0)){
        console.log('hi3');
        return <NoQuoteFound/>
    }
    return (
        <div>
            <QuoteList isLoading={status==='pending'} quotes={loadedData}/>
        </div>
    )
}

export default AllQuotes
