import React from 'react'
import './Messages.scss'

const Messages = props => {

    return (
        <div className='messages'>
            {props.header.length !== 0 ? (
                <h2>{props.header.address}, {props.header.zipcode}</h2> 
            ) : (
                <h2>Select a conversation</h2>
            )}
            <div className='chatroom'>
                {props.conversation.map(item => (
                    <div className='chatroom-message' key={item.message_id}>
                        {props.user_id === item.owner_id ? (
                            <div className='you'>
                                <span className='you-message'>{item.message}</span>
                            </div>
                        ) : (
                            <div className='other'>
                                <span className='other-message'>{item.message}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={props.sendMessage}>
                <input value={props.message} onChange={props.changeMessage} />
                <button>Send</button>
            </form>
        </div>
    )
    
}

export default Messages