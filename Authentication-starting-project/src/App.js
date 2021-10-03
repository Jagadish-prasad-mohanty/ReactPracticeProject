import { Switch, Route,Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/ContextProvider';
import { useContext } from 'react';
function App() {
  const authCtx=useContext(AuthContext);
  
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
        {authCtx.isLoggedin && <HomePage />}
          {!authCtx.isLoggedin && <Redirect to='/auth'/>}
        </Route>
        {!authCtx.isLoggedin && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {authCtx.isLoggedin && <UserProfile />}
          {!authCtx.isLoggedin && <Redirect to='/auth'/>}
          
        </Route>
        <Route path="*">
          <p style={{textAlign:'center'}}>404 ERROR!!</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
