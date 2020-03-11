import React from 'react'
import styles from './index.module.css'


function Button({children, typeStyle, className,onClick,width,padding,margin,loading, ...rest}){

    const classNames = [styles.btn , styles[typeStyle] , className].join(' ') 


    return(
        <button 
            className={classNames}
            onClick={onClick}
            style={{ 
                width, 
                padding,
                margin,
            }}
            disabled={loading}
            {...rest}
        >   
            {loading ? 
                <>
                    <span>Cargando...</span>
                </>
                : children}
        </button>
    )
    



}

Button.defaultProps ={
    className:' ',
    typeStyle: 'primary',
    onClick: null
}


export default Button