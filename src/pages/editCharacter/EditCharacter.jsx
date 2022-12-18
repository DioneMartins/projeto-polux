import React from "react";
import { Header } from "../../components";
import style from './EditCharacter.module.css';

const { editCharWrapper } = style;

export default function EditCharacter(){
    return(
        <div className={editCharWrapper}>
            <Header/>
            <p>Edição de personagem [COMING SOON]</p>
        </div>
    );
}