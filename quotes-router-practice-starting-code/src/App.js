import { Route, Switch, Redirect } from "react-router-dom";
// import { useState } from "react";
// import NoQuotesFound from "./components/quotes/NoQuotesFound";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import NoQuote from "./pages/NoQuote";
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

      <Switch>
      <Route path="/"  exact>
        <Redirect to='/quotelist'/>
      </Route>
        <Route path="/newquote">
          <NewQuote/>
        </Route>
        <Route path="/quotelist" exact>
          <AllQuotes/>
        </Route>
        <Route path="/quotelist/:quoteID"  component={QuoteDetails}/>
        <Route path="*">
          <NoQuote/>
        </Route>
      </Switch>
    </Layout>
    
  );
}

export default App;
