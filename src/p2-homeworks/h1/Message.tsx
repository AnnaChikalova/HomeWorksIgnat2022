import React from 'react'
import s from './Message.module.css'
type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={`${s.message} ${s.bigBox}`}>

            <span>
                <img src={props.avatar}/>
            </span>
            <div className={`${s.box} ${s.triangle}`}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <span>{props.time}</span>
            </div>

        </div>
    )
}

export default Message
