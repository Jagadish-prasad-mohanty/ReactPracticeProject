import {Route,Switch,Redirect} from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products'
import MyProducts from './Components/MyProducts';
import Product from './Pages/Product';
function App() {
  return (
    <>
      <MyProducts/>
      <main>
        <h2>Let's get started!</h2>
        <Switch>
        <Route path="/"  exact>
          <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome"><Welcome/></Route>
        <Route path='/products/:productID' exact><Product/></Route>
        <Route path="/products"><Products/></Route>
        </Switch>
      </main>
      </>
  );
}

export default App;
