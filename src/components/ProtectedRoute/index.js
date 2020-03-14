import React, {useContext} from 'react'
import {Route, Navigate} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'
import loadingIcon from '../../assets/images/loading.gif'

function ProtectedRoute({children, element, ...props}){
    const {currentUser, isLoading} = useContext(AuthContext)
    
    console.log(isLoading)

    if(isLoading)
        return <img width="150px" src={loadingIcon}  alt="loading"/> 


    return(
        <>
            <Route {...props} element={currentUser ? element : <Navigate to="/"/> } >      }>  
                {children}
            </Route>
        </>     
    )
}


export default ProtectedRoute