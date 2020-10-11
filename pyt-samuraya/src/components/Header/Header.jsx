import React from 'react';
import header from './Header.module.css'

const Header = () => {
    return (
        <header className={header.header}>
          <div className={header.logo}><a className={header.link} href='/profile'>A/G</a></div>
          <div className={header.search}><input type='text' className={header.input} Value='Поиск'/></div>
          <div className={header.music}>Music</div>
          <div className={header.profile}>Profile</div>
      </header>
    );
}

export default Header;