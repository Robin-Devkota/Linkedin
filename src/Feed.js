
import CreateIcon from '@mui/icons-material/Create';
import { Create, CreateNewFolderSharp, EventNote, SettingsVoice, Subscriptions } from '@mui/icons-material';
import React from 'react'
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import Post from './Post';
import InputOption from './InputOption';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
 function Feed() {
   const user=useSelector(selectUser);
   const [input,setInput] = useState('');
   const [posts, setPosts] = useState([]);
   useEffect(()=>{

db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
  setPosts(snapshot.docs.map((doc)=>({id:doc.id,
    data:doc.data(),
  }))
  )
);
   },[]);
   const sendPost = (e) => {
     e.preventDefault();
     
db.collection('posts').add({
  name: user.displayName,
  description:user.email,
 message:input,
  photoUrl:user.photoUrl || "",
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
});

setInput('');
};
  return (
    <div className='feed'>
    <div className='feed__inputContainer'>
    <div className='feed__input'>
  
   <CreateIcon />
    <form>
        <input  value={input} onChange ={e=>setInput(e.target.value)} type="text"/>
        <button onClick={sendPost} type="submit">send</button>
    </form>



</div>

<div className='feed__inputOptions'>

<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
<InputOption Icon={VideoLibraryIcon} title='Videos' color='green'/>
<InputOption Icon={EventNote} title='Event' color='skyblue'/>
<InputOption Icon={SettingsVoice} title='Voice' color='purple'/>




</div>
</div>


{/* //post */}
{posts.map(({id ,data: {name,description,message,photoUrl }}) => (
 
  <Post
  key={id}
  name={name}
  description={description}
  message={message}
  photoUrl={photoUrl}
  />
))}


    </div>
  );

 }export default Feed;
