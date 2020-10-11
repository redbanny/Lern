import React from 'react';
import messages from './Empty.module.css';

const Empty = () => {

    let newChat = () => {
        alert ('Выберите контакт')
    }

    return (
        <div className={messages.messages}>
            <div className={messages.empty}>
                <i class="far fa-comments"></i>
                <span>Пожалуйста, выберите</span> <span>беседу или <a onClick={newChat}>создайте новую</a></span>
            </div>
        </div>
    );
}

export default Empty;