import React from 'react';
import "./LoginScreen.css"

const LoginScreen = () => {
    return (
        <div className={"loginScreen"}>
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo"/>
                <button className={'loginScreen__button'}>Sign In</button>
                <div className="loginScreen__gradient"/>
                <div className="loginScreen__body">
                    <>
                <h1>Unlimited films, T.V., and more.</h1>
                    </>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
