import React from 'react';
import { NavLink } from 'react-router-dom';
import friend from './FriendItem.module.css';

const FriendItem = (props) => {
    let path = '/Friends/friend/' + props.id;

    return (
        <li className={friend.item}>            
            <div className={friend.photo}><img className={friend.profilePhoto} src={props.photo} alt='Аватарка'></img></div>
            <div className={friend.block}>
                <span className={friend.name}>{props.name}</span>
                <span>Education</span>
                <span>Написать сообщение</span>
            </div>
        </li>
    );
}

export default FriendItem;