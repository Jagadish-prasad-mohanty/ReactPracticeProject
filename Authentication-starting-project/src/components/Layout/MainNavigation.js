import { Link,useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/ContextProvider'
import { useContext } from 'react';

const MainNavigation = () => {
  const history=useHistory();
  const authCtx=useContext(AuthContext);
  const logoutHandler= () =>{
    authCtx.logout();
    history.push('/auth');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        
          {!authCtx.isLoggedin && <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          </ul>}
            
          {authCtx.isLoggedin && <ul>
            <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
          }
      </nav>
    </header>
  );
};

export default MainNavigation;
