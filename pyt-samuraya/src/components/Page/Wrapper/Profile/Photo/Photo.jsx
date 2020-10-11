import React from 'react';
import profile from './Photo.module.css'

const Photo = () => {
    return (
      <div className={profile.editor}>
        <div className={profile.photo}>
          <div className ={profile.photo__menu}>
            <ul>
              <li><i class="fas fa-arrow-up"></i><a href='#'>Обновить фотографию</a></li>
              <li><i class="fas fa-circle-notch"></i><a href='#'>Изменить миниатюру</a></li>
              <li><i class="fas fa-smile-wink"></i><a href='#'>Добавить эффект</a></li>
            </ul>
          </div>
        </div>            
        <div className={profile.edit}>
          <button className={profile.edit__button}>Редактировать</button>
          <button className={profile.edir__more}>...</button>
        </div>
      </div>
    );
}

export default Photo;
 