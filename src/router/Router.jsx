import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard, EditCharacter, EditItem, EditPlace, LoginPage, PageNotFound, RPGPage, UserPage } from "../pages";

export default function Router(){
    const [user, setUser] = useState(false);

    useEffect(() => {
        const retrieve = JSON.parse(localStorage.getItem('user'));
        if (retrieve) {
            setUser(retrieve);
        }
        console.log(user);
    }, []);

    return (
        <Routes>
            <Route exact path="/" element={user ? <Navigate to="/dashboard"/> : <Navigate to="/login"/>}/>
            <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            <Route path="/login" element={user ? <Navigate to="/dashboard"/> : <LoginPage/>}/>
            <Route path="/rpg/:rpg" element={user ? <RPGPage/> : <Navigate to="/login"/>}/>
            <Route path="/user/:username" element={user ? <UserPage/> : <Navigate to="/login"/>}/>
            <Route path="/rpg/:rpg/edit/character/:char" element={user ? <EditCharacter/> : <Navigate to="/login"/>}/>
            <Route path="/rpg/:rpg/edit/item/:item" element={user ? <EditItem/> : <Navigate to="/login"/>}/>
            <Route path="/rpg/:rpg/edit/place/:place" element={user ? <EditPlace/> : <Navigate to="/login"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}