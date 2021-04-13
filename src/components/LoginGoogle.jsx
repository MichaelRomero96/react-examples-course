import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from '@material-ui/core/';
//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import iconGoogle from '../assets/icons/google.svg';
//styles
import "../styles/google.css";
import { useHistory } from 'react-router';
import { useDispatch, useStore } from '../context/provider/LoginGoogleProvider';
import { types } from '../context/reducers/LoginGoogleReducer';


export default function LoginGoogle() {
    const dispatch = useDispatch();
    const { user } = useStore();
    const { name, googleId } = user;

    // const { name } = user;

    // const [googleData, setGoogleData] = useState({
    //     accessToken: "",
    //     givenName: ""
    // });
    const history = useHistory();

    const responseGoogle = async (response) => {
        console.log(response);
        const responseData = await response
        dispatch({
            type: types.googleLogin,
            payload: responseData.profileObj
        })
    }
    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <>
            {name ?
                <div>
                    <h1>Bienvenido {user.name}</h1>
                    <button onClick={() => dispatch({ type: types.googleLogout, })}>
                        Cerrar Sesión
                        </button>
                </div>
                :
                <div>
                    <GoogleLogin
                        clientId="463286201082-bl7f1upfa8kscdvbvl9tvs1rtdmhop26.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <Button
                                variant="contained"
                                className="buttonGoogle"
                                onClick={renderProps.onClick}
                                startIcon={<img src={iconGoogle} alt="Google" className="googleIcon" />}
                                style={{
                                    textTransform: "none"
                                }}>
                                Entrar con Google
                            </Button>
                        )}
                    />

                    <FacebookLogin
                        appId="506504120374258"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        render={renderProps => (

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={renderProps.onClick}
                                startIcon={<FacebookIcon fontSize='large' />}
                                style={{
                                    textTransform: "none"
                                }}>
                                Entrar con Facebook
                            </Button>
                        )} />
                </div>
            }
        </>

    )
}
