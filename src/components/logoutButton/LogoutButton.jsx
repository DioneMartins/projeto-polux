import React from "react";
import { logOut } from "../../api/api";

function handleLogOut(){
    logOut();
}

export default function LogoutButton(){
    return(
        <button onClick={(e) => handleLogOut()}>Logout</button>
    );
}