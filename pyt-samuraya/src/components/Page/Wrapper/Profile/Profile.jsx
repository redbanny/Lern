import React from 'react';
import profile from './Profile.module.css'
import Photo from './Photo/Photo';
import FriendsBlock from './Friends/FriendsBlock';

const Profile = () => {
    return (
        <div className={profile.content}>
          <Photo />
          <FriendsBlock />
        </div>
    );
}

export default Profile;
 