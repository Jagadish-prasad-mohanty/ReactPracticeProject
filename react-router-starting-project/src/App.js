import {Route} from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products'
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome"><Welcome/></Route>
      <Route path="/products"><Products/></Route>
    </div>
  );
}

export default App;
