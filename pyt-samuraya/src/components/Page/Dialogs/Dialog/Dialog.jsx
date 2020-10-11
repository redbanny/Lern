import React from 'react';
import dialog from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {    
    let dialogItems= props.Data.map(el => (<DialogItem name={el.name} photo={el.photo} id={el.id}/>))

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.searchBlock}>                
                <div className={dialog.in}>
                    <input type='text' className={dialog.input} placeholder='Поиск'></input>
                </div>
                <div className={dialog.new}>
                    <button className={dialog.newMessage} type="button"><i class="fas fa-edit"></i></button>
                    <button className={dialog.yet} type="button"><i class="fas fa-ellipsis-h"></i></button>                    
                </div>
            </div>
            <div className={dialog.nav}>
                <ul className={dialog.items}>
                    {dialogItems}
                </ul>
            </div>
            <footer className={dialog.footer}></footer>
        </div>
    );
}

export default Dialog;