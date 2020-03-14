import React, {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'
import styles from './index.module.css'
import LoginButton from '../../components/LoginButton';

function LandPage(){
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        if(currentUser){
            navigate('/app/home')
        }    
    }, [currentUser, navigate])

    return(
        <div className={styles['container']}>
            <h1 className={styles['title']}>BookHub</h1>
            <p className={styles['description']}>Keep track of the books you read.</p>
            <div>
                <LoginButton/>
            </div>
        </div>
    )


}


export default LandPage