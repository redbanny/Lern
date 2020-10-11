import React from 'react';
import nav from './Navigation.module.css';
import NavigationItems from './Items/Navitem';

const Navigation = () =>{
    return (
        <div className={nav.nav}>
            <NavigationItems name='Моя страница' logo='fas fa-house-user' linc='/profile' />
            <NavigationItems name='Новости' logo='fas fa-newspaper' linc='/feed' />
            <NavigationItems name='Сообщения' logo='fas fa-comments' linc='/dialogs' />
            <NavigationItems name='Друзья' logo='fas fa-user-friends' linc='/friends' />
            <NavigationItems name='Музыка' logo='fas fa-music' linc='/music' />
        </div> 
    );
}


export default Navigation;
