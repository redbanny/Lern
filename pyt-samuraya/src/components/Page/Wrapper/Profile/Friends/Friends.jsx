import React from 'react';
import friend from './Friends.module.css'
import Friend from './Friend/Friend';

const Friends = () => {
    return (
      <div className={friend.wrapper}>
        <Friend name='Друзья' count='49' link='/friends'/>
        <Friend name='Друзья онлайн' count='4'/>
      </div>
    );
}

export default Friends;
 