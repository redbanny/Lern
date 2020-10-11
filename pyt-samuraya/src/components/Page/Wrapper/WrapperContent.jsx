import React from 'react';
import page from './WrapperContent.module.css';
import Profile from './Profile/Profile';
import Description from './Description/Description';

const WrapperContent = () => {
    return (
        <div className={page.wrapperContent}>
                <Profile />
                <Description />
        </div>
    );
}

export default WrapperContent;