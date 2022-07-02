import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import {ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
    <Avatar src={photoUrl} >{name[0]}</Avatar>
        <div className='post__info'>
              <h2>{name}</h2>
            <p>{description}</p>

        </div>
        </div>

        <div className='post__body'>

        <p>{message}</p>
        </div>
<div className='post__buttons'>
  <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='darkblue'/>
  <InputOption Icon={ChatOutlined} title='Comment' color='darkblue'/>
  <InputOption Icon={ShareOutlined} title='Share' color='darkblue'/>
  <InputOption Icon={SendOutlined} title='Send' color='darkblue'/>
  
  
  </div>
    </div>
  )
}

export default Post;