import React from 'react'
import "./message.css";


export default function Message({own}) {
  return (
    <div className={own ? "message own": "message"}>
    <div className="messageTop">
        <img className="messageImg" src="assets\person\2.jpeg" alt="" />
        <p className='messageText'>hello this is a message</p>
    </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
