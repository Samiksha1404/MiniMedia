import React from 'react'
import "./chatOnline.css"


export default function ChatOnline() {
  return (
    <div className='chatOnline'>
    <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
            <img className='chatOnlineImg' src="assets/person/3.jpeg" alt="" />
            <div className="chatOnlineBadge"></div>
           
        </div>
        <span className="conversationName">Mini Gupta</span>
    </div>
      
    </div>
  )
}
