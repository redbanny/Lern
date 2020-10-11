import React from 'react';
import { NavLink } from 'react-router-dom';
import dialog from './DialogItem.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/chat/' + props.id;

    return (
        <li className={dialog.item}>
            <NavLink to={path} activeClassName={dialog.active} className={dialog.link}>
                <div className={dialog.photo}><img className={dialog.profilePhoto} src={props.photo} alt='Аватарка'></img></div>
                <span className={dialog.description}>{props.name}</span>
            </NavLink>
        </li>
    );
}

export default DialogItem;