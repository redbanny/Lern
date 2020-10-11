import React from 'react';
import { connect } from 'react-redux';
import Dialog from './Dialog';


/*const DialogContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();

                    return (
                        <Dialog Data={state.DialogPage.dialogData} />
                    )
                }
            }
        </StoreContext.Consumer>

    );
}*/

let mapStateToProps = (state) =>{
    return {
        Data: state.DialogPage.dialogData,
    }
}

const DialogContainer = connect (mapStateToProps)(Dialog)

export default DialogContainer;