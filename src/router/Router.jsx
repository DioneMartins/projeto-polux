import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Dashboard, EditCharacter, EditItem, EditPlace, LoginPage, RPGPage, UserPage } from "../pages";

export default function Router(){
    let user=false;
    return (
        <Routes>
            <Route path="/" element={user ? <Dashboard/> : <LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/rpg/:rpg" element={<RPGPage/>}/>
            <Route path="/user/:username" element={<UserPage/>}/>
            <Route path="/rpg/:rpg/edit/character/:char" element={<EditCharacter/>}/>
            <Route path="/rpg/:rpg/edit/item/:item" element={<EditItem/>}/>
            <Route path="/rpg/:rpg/edit/place/:place" element={<EditPlace/>}/>
        </Routes>
    );
}