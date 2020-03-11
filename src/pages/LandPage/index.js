import React from 'react'
import styles from './index.module.css'
import Button from '../../components/Button'

function LandPage(){

    return(
        <div className={styles['container']}>
            <h1 className={styles['title']}>BookHub</h1>
            <p className={styles['description']}>Keep track of the books you read.</p>
            <div>
                <Button typeStyle="primary" width="100px">Login</Button>
                <Button typeStyle="secondary" width="100px" margin="10px auto auto auto">Sign Up</Button>
            </div>
        </div>
    )


}


export default LandPage