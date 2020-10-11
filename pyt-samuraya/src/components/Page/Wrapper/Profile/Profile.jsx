import React from 'react';
import profile from './Profile.module.css'
import Photo from './Photo/Photo';
import Friends from './Friends/Friends';

const Profile = () => {
    return (
        <div className={profile.content}>
          <Photo />
          <Friends />
        </div>
    );
}

export default Profile;
 