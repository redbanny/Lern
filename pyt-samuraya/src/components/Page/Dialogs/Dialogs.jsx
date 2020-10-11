import React from 'react';
import page from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer'
import Message from './Message/Message';

const Dialogs = (props) => {

    return (
        <div className={page.wrapperContent}>
            <DialogContainer />
            <Message />
        </div>
    );
}

export default Dialogs;