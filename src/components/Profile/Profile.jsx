/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>);
};

export default Profile;