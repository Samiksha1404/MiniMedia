import React from 'react'
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";


export default function Messenger() {
const {user}=useContext(AuthContext);
console.log(user);

  return (
    <>
    <Topbar/>
    <div className='messenger'>

      <div className="chatMenu">
        <div className="chatMenuWrapper">
            <input placeholder="Search for friends" type="text" className="chatMenuInput" />
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                

            </div>
            <div className="chatBoxBottom">
                <textarea  placeholder="write something..." className="chatMessageInput"></textarea>
                <button className="chatSubmitButton">Send</button>
            </div>
        </div>
      </div>

      <div className="chatOnline">
        <div className="chatOnlineWrapper">
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
        </div>
        </div>

    </div>
    </>
  )
}
