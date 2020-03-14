import React, {useContext} from 'react'
import Title from '../../components/Title'
import styles from './index.module.css'
import app from '../../initFireBase'
import {AuthContext} from '../../contexts/AuthContext'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'

function ProfilePage(){
    const {currentUser} = useContext(AuthContext)

    const logOut = () => {
        app.auth().signOut()
    }

    return(
        <div >
            <Title text="Profile"></Title>
            <div className={styles['content']}>
                <Avatar image={currentUser.photoURL} width="100px"/>
                <Title text={currentUser.displayName} fontSize="24px" typeStyle="secondary"/>
                <Button padding="7px" onClick={logOut}>LogOut</Button>
            </div>
        </div>
    )


}


export default ProfilePage