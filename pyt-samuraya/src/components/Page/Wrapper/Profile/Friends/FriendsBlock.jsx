import React from 'react';
import friend from './FriendsBlock.module.css'
import Friend from './Friend/Friend';

const FriendsBlock = () => {
    return (
      <div className={friend.wrapper}>
        <Friend name='Друзья' count='49' link='/friends'/>
        <Friend name='Друзья онлайн' count='4'/>
      </div>
    );
}

export default FriendsBlock;
 