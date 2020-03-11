import React from 'react'
import {NavLink} from 'react-router-dom'
import {ReactComponent as BookIcon} from '../../assets/icons/agenda.svg'
import {ReactComponent as ProfileIcon} from '../../assets/icons/user.svg'
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'
import styles from './index.module.css'

function NavBar(){

    return(
        <div className={styles['container']}>
            <NavLink to="/" className={styles['option']} activeClassName={styles['active']}>
                <BookIcon />
            </NavLink>
            <NavLink to="/profile" className={styles['option']} activeClassName={styles['active']}>
                <ProfileIcon />
            </NavLink>
            <NavLink to="/search" className={styles['option']} activeClassName={styles['active']}>
                <SearchIcon/>
            </NavLink>
        </div>
    )


}


export default NavBar