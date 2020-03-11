import React from 'react'
import {Outlet} from 'react-router-dom'
import styles from './index.module.css'
import NavBar from '../NavBar'

function MainLayout(){

    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <Outlet/>
            </div>
            <NavBar/>
        </div>
    )


}


export default MainLayout