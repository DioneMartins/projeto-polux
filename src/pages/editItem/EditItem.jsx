import React from "react";
import { Header } from "../../components";
import style from './EditItem.module.css';

const { editItemWrapper } = style;

export default function EditItem(){
    return(
        <div className={editItemWrapper}>
            <Header/>
        </div>
    );
}