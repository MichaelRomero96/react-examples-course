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
import { useStore } from '../context/provider/LoginGoogleProvider';


export default function LoginGoogle() {

    const { user } = useStore();


    const [googleData, setGoogleData] = useState({
        accessToken: "",
        givenName: ""
    });
    const history = useHistory();
    const [accessTokenData, setaccessTokenData] = useState(
        window.localStorage.getItem("access-token")
    )

    const responseGoogle = async (response) => {
        console.log(response);
        const responseData = await response
        setGoogleData(responseData);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const { accessToken } = googleData;

    // useEffect(() => {
    //     if (accessTokenData !== null) {
    //         history.push("/")
    //     }
    // }, [accessTokenData])



    useEffect(() => {
        if (accessToken.length !== 0) {
            setaccessTokenData(accessToken)
            window.localStorage.setItem("access-token", accessToken)
        }
    }, [accessToken])

    return (
        <>
            <h1>{user.name}</h1>
            {accessTokenData ?
                <div>
                    <h1>Bienvenido {googleData.givenName}</h1>
                    <img src={googleData.imageUrl} />
                </div>
                :
                <>
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
                </>
            }

        </>
    )
}
