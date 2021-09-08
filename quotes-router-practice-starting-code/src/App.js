import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { useState } from "react";
// import NoQuotesFound from "./components/quotes/NoQuotesFound";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetails from "./pages/QuoteDetails";
// import NewQuote from "./pages/NewQuote";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
// import NoQuote from "./pages/NoQuote";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote=React.lazy(()=>import("./pages/NewQuote") );
const AllQuotes=React.lazy(()=>import("./pages/AllQuotes") );
const QuoteDetails=React.lazy(()=>import("./pages/QuoteDetails") );
const NoQuote=React.lazy(()=>import("./pages/NoQuote") );
function App() {
  // const [quotes, setQuotes] = useState([]);
  // const quoteAddHandler = (quote) => {
  //   const newQuote = quotes;
  //   newQuote.push(quote);
  //   setQuotes(newQuote);
  //   console.log(quotes);
  // };
  return (
    <Layout>
      <Suspense fallback={<div className="centered">
        <LoadingSpinner/>
      </div>}>
      <Switch>
      <Route path="/"  exact>
        <Redirect to='/quotelist'/>
      </Route>
        <Route path="/quotelist" exact>
          <AllQuotes/>
        </Route>
        <Route path="/quotelist/:quoteID"  component={QuoteDetails}/>
        <Route path="/newquote">
          <NewQuote/>
        </Route>
        <Route path="*">
          <NoQuote/>
        </Route>
      </Switch>
      </Suspense>
    </Layout>
    
  );
}

export default App;
