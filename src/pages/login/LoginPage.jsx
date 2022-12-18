import React from "react";
import { Header } from "../../components";
import style from './LoginPage.module.css';

const { loginWrapper } = style;

export default function LoginPage(){
    return(
        <div className={loginWrapper}>
            <Header/>
            <p>Página de login [COMING SOON]</p>
        </div>
    );
}