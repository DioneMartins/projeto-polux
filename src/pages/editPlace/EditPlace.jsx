import React from "react";
import { Header } from "../../components";
import style from './EditPlace.module.css';

const { editPlaceWrapper } = style;

export default function EditPlace(){
    return(
        <div className={editPlaceWrapper}>
            <Header/>
            <p>Edição de lugar [COMING SOON]</p>
        </div>
    );
}