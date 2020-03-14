import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../Button'
import googleLogo from '../../assets/icons/google.svg'
import app from '../../initFireBase'



function LoginButton(){
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate() 
    const provider = new app.auth.GoogleAuthProvider();



    
    const signUp = () => {
        setIsLoading(true)

        app.auth().signInWithPopup(provider)
        .then(function(result){
            setIsLoading(false)
            navigate('/app/home')
        })
        .catch(function(error){
            setIsLoading(false)
            console.log(error)
        })

    }

   
        
        

    
    return(
        <Button onClick={signUp} typeStyle="secondary">
            {isLoading ? <span>Loading...</span>: 
                <span>Let's Start with Google</span>
            }
            <img src={googleLogo} width="20" alt="googleLogo"/>
        </Button>
    )
}


export default LoginButton