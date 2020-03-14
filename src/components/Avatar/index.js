import React from 'react'
import defaultImage from '../../assets/images/book.jpg' 
import styles from './index.module.css'

function Avatar({image , width , ...props}){

    const classNames = [styles.avatar , props.className].join(' ') 
    
    return (
        <div className={styles.container}>
            <img
                style={{
                    width 
                }} 
                src={image}  
                className={classNames} 
                alt="Profile Avatar"/>
        </div>
    )

}


Avatar.defaultProps ={
    image: defaultImage,
    width: '45px',
    className:' '
}


export default Avatar


