import React from 'react';
import { connect } from 'react-redux';
import { addSMSac, onChangeAC } from '../../../../../JS/dialogsReducer';
import Chat from './Chat';


/*const ChatContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();

                    let newMessage = () => {
                        store.dispatch(addSMSac());
                    }
                    let onSmsChange = (text) => {
                        let action = onChangeAC(text)
                        store.dispatch(action);
                    }
                    return (
                        <Chat updateSmsText={onSmsChange}
                            addSMS={newMessage}
                            smsData={state.DialogPage.smsData}
                            newMessText={state.DialogPage.newMessText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) =>{
    return {
        smsData: state.DialogPage.smsData,
        newMessText: state.DialogPage.newMessText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateSmsText: (text) =>{
            dispatch(onChangeAC(text));
        },
        addSMS: () => {
            dispatch(addSMSac());
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;