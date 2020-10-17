import React, { Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import page from './Page.module.css';
import WrapperContent from './Wrapper/WrapperContent';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Feed from './Feed/Feed';
import Music from './Music/Music';
import FriendsContainer from './Friends/FriendsContainer'

const Page = (props) => {
    return (
        <div className={page.page}>
            <Navigation />  
            <Route path='//' render={ () => <WrapperContent /> }/>  
            <Route path='/profile' render={ () => <WrapperContent /> }/> 
            <Route path='/dialogs' render={ () => <Dialogs /> }/> 
            <Route path='/feed' render={ () => <Feed /> }/> 
            <Route path='/friends' render={ () => <FriendsContainer/> }/> 
            <Route path='/music' render={ () => <Music /> }/>             
        </div>
    );
}

export default Page;