import React from "react";
import { Header } from "../../components";
import style from './PageNotFound.module.css';

const { notFoundText, notFoundTextMini } = style;

export default function PageNotFound(){
    return(
        <div>
            <Header/>
            <h1 className={notFoundText}>Página não encontrada</h1>
            <h2 className={notFoundTextMini}>Alguém está tentando bisbilhotar os arquivos do mestre...?</h2>
        </div>
    );
}