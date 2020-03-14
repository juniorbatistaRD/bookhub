import React, {useState, useEffect} from 'react'
import styles from './BookList.module.css'
import BookItem from '../../components/BookItem'
import loadingIcon from '../../assets/images/loading.gif'

function BookList({books, isLoading}){
 
 
   
    return(
        <div className={styles['container']}>
        {
            (isLoading) ? <img className={styles['loading']} src={loadingIcon} width="150px" alt="loading"/> 
            
            :

            books.map((book, index) =>  <BookItem key={index} bookInfo={book}/>)

            
        } 
            
        </div>
    )


}


export default BookList