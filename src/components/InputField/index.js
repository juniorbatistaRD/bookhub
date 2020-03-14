import React from 'react'
import styles from './index.module.css'


function TextArea({children, ...props}){



    return(
       <>
            <input className={styles['input']} {...props}/>
       </>
    )
    



}



export default TextArea