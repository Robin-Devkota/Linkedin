import React from 'react'
import { useState } from 'react';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'
import { useDispatch } from 'react-redux';
function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[name,setName] = useState('');
    const[profilePic,setProfilePic] = useState('');
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
      .then(userAuth=>{
          dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
          })
          );
      
        
        }).catch(error=>alert(error));
    };
    const register = () => {
if(!name){
    return alert('Please enter your full-name');
}
auth.createUserWithEmailAndPassword(email,password)
.then((userAuth)=>{
    userAuth.user.updateProfile({
    displayName:name,
    photoURL:profilePic,
    })
.then(()=>{
dispatch(login({
email:userAuth.user.email,
uid:userAuth.user.uid,
displayName: name,
photoUrl:profilePic,
})
);
});
})
.catch((error)=>
    alert(error));
};
  return (
    <div className='login'>
    <h1>You are not loggined in</h1>
    <img src="https://www.pngkit.com/png/detail/11-113281_dr-linkedin-small-logo-png.png" alt="NO PROBLEM" />
    
    <form>
        <input value ={name} type="text" placeholder="Full name (Required If Registering)" onChange ={e=>setName(e.target.value)}/>
        <input value ={profilePic} type="text" placeholder="Profile Pic URL (Optional)" onChange ={e=>setProfilePic(e.target.value)}/>
        <input value ={email} onChange ={e=>setEmail(e.target.value)}type="email" placeholder='Email' />
        <input value ={password} type="password" placeholder="Password "onChange ={e=>setPassword(e.target.value)} />
    <button type="submit" onClick={loginToApp}>SignIn</button>
    </form>
    <p>Not a Member? 
        <span className='login__register'onClick={register}>Register Now</span>
    </p>
    </div>
  );
}

export default Login