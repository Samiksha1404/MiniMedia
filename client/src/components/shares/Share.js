import React from 'react'
import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="What is in your mind ?" type="text" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                
                <div className="shareBottom">
                <div className="shareOption">
                <PermMedia htmlColor='tomato' className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                <Label htmlColor='blue' className="shareIcon"/>
                    <span className="shareOptionText">Label</span>
                </div>
                <div className="shareOption">
                <Room htmlColor='green' className="shareIcon"/>
                    <span className="shareOptionText">Room</span>
                </div>
                <div className="shareOption">
                <EmojiEmotions htmlColor='goldenrod' className="shareIcon"/>
                    <span className="shareOptionText">Emoji</span>
                </div>
                </div>
                <button className="shareButton">Share</button>
            </div>

        </div>
    )
}
