import React from "react";
import { Header } from "../../components";
import style from './RPGPage.module.css';

const { rpgWrapper } = style;

export default function RPGPage(){
    return(
        <div className={rpgWrapper}>
            <Header/>
            <p>Mesa de RPG [COMING SOON]</p>
        </div>
    );
}