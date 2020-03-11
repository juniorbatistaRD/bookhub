import React from 'react'
import styles from './index.module.css'
import Title from '../../components/Title'
import Button from '../../components/Button'

function HomePage(){

    return(
        <div>
            <header className={styles['header']}>
                <Title text="My Books" className={styles.title}></Title>
                <Button className={styles['add-book-button']}>Add Book</Button>
            </header>

        </div>
    )


}


export default HomePage