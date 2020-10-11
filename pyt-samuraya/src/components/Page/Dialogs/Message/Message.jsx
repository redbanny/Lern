import React from 'react';
import messages from './Message.module.css';
import { Route } from 'react-router-dom';
import Empty from './Empty/Empty';
import ChatContainer from './Chat/ChatContainer';

const Message = (props) => {
    return (
        <div className={messages.messages}>
            <Route exact path='/dialogs/' render={ () => <Empty/> }/>
            <Route path='/dialogs/chat/' render={ () => <ChatContainer/>}/>
        </div>
    );
}

export default Message;