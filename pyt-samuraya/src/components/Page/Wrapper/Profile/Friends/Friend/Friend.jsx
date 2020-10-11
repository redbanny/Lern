import React from 'react';
import { NavLink } from 'react-router-dom';
import friend from './Friend.module.css'

const Friend = (props) => {
    return (
      <div className={friend.all}>
          <a href={props.link}> <span className={friend.head}><span>{props.name}</span> <span>{props.count}</span></span> </a>
      </div>
    );
}

export default Friend;
 