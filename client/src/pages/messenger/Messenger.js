// import React, { useEffect, useState } from 'react'
// import "./messenger.css";
// import Topbar from "../../components/topbar/Topbar";
// import Conversation from '../../components/conversations/Conversation';
// import Message from '../../components/message/Message';
// import ChatOnline from '../../components/chatOnline/ChatOnline';
// import { useContext} from "react";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";

// import { spawn } from 'child_process';


// export default function Messenger() {
//   const[conversations,setConversations]=useState([]);
//   const[currentChat,setCurrentChat]=useState(null);
//   const[messages,setMessages]=useState([]);
//   const {user}=useContext(AuthContext);


// useEffect(()=>{
//   const getConversations = async()=>
//   {
//     try{
//     const res=await axios.get("/conversation/"+user._id);
//     setConversations(res.data);
//   }catch(err)
//   {
//     console.log(err);
//   }
// };
// getConversations();
// },[user._id]);

//   return (
//     <>
//     <Topbar/>
//     <div className='messenger'>

//       <div className="chatMenu">
//         <div className="chatMenuWrapper">
//             <input placeholder="Search for friends" type="text" className="chatMenuInput" />
            
//               {conversations.map((c)=>(

//             <Conversation conversation={c} currentUser={user}/>
//               ))}
           
//         </div>
//       </div>

//       <div className="chatBox">
//         <div className="chatBoxWrapper">
//         {currentChat ? (
//               <>
//                 <div className="chatBoxTop">
//                   {/* Render messages here */}
//                 </div>
//                 <div className="chatBoxBottom">
//                   <textarea placeholder="Write something..." className="chatMessageInput"></textarea>
//                   <button className="chatSubmitButton">Send</button>
//                 </div>
//               </>
//             ) : (
//               <span>Open a conversation to start a chat.</span>
//             )}
//         </div>
//       </div>

//       <div className="chatOnline">
//         <div className="chatOnlineWrapper">
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//             <ChatOnline/>
//         </div>
//         </div>

//     </div>
//     </>
//   )
// }
