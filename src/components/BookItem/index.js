import React from 'react'
import {Link} from 'react-router-dom'
import styles from './index.module.css'
import Title from '../Title'

function BookItem({bookInfo}){

    return(
        <div className={styles.container}>
            <img className={styles.cover} src={bookInfo.image} alt="COver"/>
            <div className={styles.info}>
                <Title text={bookInfo.title} fontSize="18px" padding="0px"/>
                <Title text={bookInfo.author} fontSize="14px" typeStyle="secondary"/>
                <span>{bookInfo.year}</span>
                <Link to={`/app/addbook/${bookInfo.id}`}>
                    <p>Add Book</p>
                </Link>
            </div>

        </div>
    )
}


export default BookItem