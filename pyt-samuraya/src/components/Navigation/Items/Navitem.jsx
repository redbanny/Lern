import React from 'react';
import item from './Navitem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = (props) =>{
    return (
        <div>
            <NavLink to={props.linc} className={item.item}>
                <i class= {props.logo }> </i>
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default NavigationItems;