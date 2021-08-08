import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
import { useReducer } from 'react';

function App() {
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
  
  return (
    <>
    <Header/>
    <Auth/>
    {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
