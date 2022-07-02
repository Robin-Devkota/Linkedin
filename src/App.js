import Feed from './Feed';
import  React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux';
import {selectUser,login,logout} from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { Email } from '@mui/icons-material';
import Widgets from './Widgets';

function App() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    dispatch(login({
      email:userAuth.email,
      uid:userAuth.uid,
      displayName:userAuth.displayName,
      photoUrl:userAuth.photoURL,
    }));
    //user is loged in
  }else{
    //user is loged out
  dispatch(logout());
  }
})
  },[])

  return (
    <div className="app">
    <Header />
    {!user ?(
      <Login />
    ):(
      <div className='app__body'>
      <Sidebar />
      <Feed />
      
      <Widgets/>
      </div>
      
    )}
    </div>
  );
}

export default App;
