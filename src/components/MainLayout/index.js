import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styles from './index.module.css'
import HomePage from '../../pages/HomePage'
import SearchPage from '../../pages/SearchPage';
import ProfilePage from '../../pages/ProfilePage';
import NavBar from '../NavBar'

function MainLayout(){

    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            </div>
            <NavBar/>
        </div>
    )


}


export default MainLayout