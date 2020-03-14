import React from 'react'
import styles from './index.module.css'


function TextArea({children, ...props}){



    return(
       <>
            <textarea className={styles['input']} {...props}></textarea>
       </>
    )
    



}



export default TextArea