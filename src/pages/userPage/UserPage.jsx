import React from "react";
import { Header } from "../../components";
import style from './UserPage.module.css';

const { userWrapper } = style;

export default function UserPage(){
    return(
        <div className={userWrapper}>
            <Header/>
            <p>Página do usuário [COMING SOON]</p>
        </div>
    );
}