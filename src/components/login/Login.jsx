import React, { useState } from "react";
import { logIn } from "../../api/api";
import style from './Login.module.css';

const { loginOuter, loginWrapper, loginKeeper, loginTextInputs, loginButton, loginCheckbox } = style;

export default function Login(){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [keepUser, setKeepUser] = useState(false);

    function handleLogin(){
        logIn(userEmail, userPassword, keepUser);
    }

    return(
        <div className={loginOuter}>
            <div className={loginWrapper}>
                <input
                    className={loginTextInputs}
                    id="user"
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
                <input
                    className={loginTextInputs}
                    id="password"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                />
                <div className={loginKeeper}>
                    <input
                        className={loginCheckbox}
                        id="keep"
                        type="checkbox"
                        value={keepUser}
                        onChange={(e) => setKeepUser(e.target.value)}
                    />
                    <label htmlFor="keep">Lembrar de mim nesse computador</label>
                </div>
                <button className={loginButton} onClick={(e) => handleLogin()}>Login</button>
            </div>
        </div>
    );
}