import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import { auth , provider} from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
function Login() {
    const [user,dispatch] =useStateValue();
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch(error=>(
            alert(error.message)
        ))
    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="logo" />
            <h1>Sign in to Sabir slack</h1>
            <p>SSAB Information Technology</p>
            <Button onClick={signIn}>Sign In  With Google</Button>
            </div>
        </div>
    )
}

export default Login
