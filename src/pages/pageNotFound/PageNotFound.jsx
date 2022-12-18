import React from "react";
import { Header } from "../../components";
import style from './PageNotFound.module.css';

const { notFoundText } = style;

export default function PageNotFound(){
    return(
        <div>
            <Header/>
            <h1 className={notFoundText}>Página não encontrada</h1>
        </div>
    );
}