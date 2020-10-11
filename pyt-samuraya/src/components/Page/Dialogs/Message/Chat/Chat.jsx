import React from 'react';
import { addSMSac, onChangeAC } from '../../../../../JS/dialogsReducer';
import messages from './Chat.module.css';


const Message = (props) =>{
    return (
        <div className={messages.item}>
            {props.sms}             
        </div>
    )
}

const Chat = (props) => {
    let messageElement = props.smsData.map(el => (<Message id = {el.id} sms = {el.sms}/>))

    let newMessageElem = React.createRef();

    let newMessage = () =>{
        props.addSMS();      
    }
    let onSmsChange = () =>{
        let text = newMessageElem.current.value;
        props.updateSmsText(text)
    }

    let PressEnter = (event) =>{
        if (event.key === 'Enter')
        {
            props.addSMS();
        }
    }
    return (
        <div className={messages.messages}>
            <div className={messages.message}>
                {messageElement}
                {props.smsData.id}
            </div>
            <div className={messages.new}> 
                <input className={messages.text} placeholder='Введите сообщение' ref={newMessageElem} onChange={onSmsChange} onKeyPress={PressEnter} value={props.newMessText} />
                <button className={messages.btn} type='button'><i class="fab fa-atlassian" onClick={newMessage}></i></button>
            </div>
        </div>
    );
}

export default Chat;