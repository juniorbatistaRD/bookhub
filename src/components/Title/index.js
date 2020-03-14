import React from 'react'
import styles from './index.module.css'

function Title ({text,fontSize, typeStyle, className, padding}){

    const classNames = [styles[typeStyle],  className].join(' ') 

    return( 
        <p 
            className={classNames}
            style={{
                fontSize,
                padding
            }}
        >
            {text}
        </p>
    )
}

Title.defaultProps = {
    className: ' ',
    text:' ',
    fontSize: null,
    typeStyle:'primary'
}

//can be primary or secondary

export default Title