import React from 'react';
import page from './Friends.module.css';
import FriendItem from './FriendItem'

const Friends = (props) => {
    let FriendItems = props.Data.map(el => (<FriendItem name={el.name} photo= {el.photo} id = {el.id}/>))
    return (
        <div className={page.wrapperContent}>
            <div className={page.friendWrap}>
                {FriendItems}
            </div>
            <div className = {page.friendOrder}>
                
            </div>    
        </div>
    );
}

export default Friends;