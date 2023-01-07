import React from "react";
import { Header } from "../../components";
import style from './DashboardPage.module.css';
import LogoutButton from '../../components/logoutButton/LogoutButton';

const { dashboardWrapper } = style;

export default function DashboardPage(){
    return(
        <div className={dashboardWrapper}>
            <Header/>
            <p>Dashboard [COMING SOON]</p>
            <LogoutButton/>
        </div>
    );
}