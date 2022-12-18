import React from "react";
import star from "../../assets/star.svg"
import style from './Header.module.css';

const { headerWrapper, headerIcon, headerTitle } = style;

export default function Header() {
    return(
        <div className={headerWrapper}>
            <img className={headerIcon} src={star} alt="Ícone estrela pixelada azul"/>
            <h1 className={headerTitle}>Projeto Pólux</h1>
        </div>
    );
}