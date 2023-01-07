import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7IBiOYb0X1mvFUuCwxspssgrQwoyiT_o",
    authDomain: "burn-in-effect.firebaseapp.com",
    databaseURL: "https://burn-in-effect-default-rtdb.firebaseio.com",
    projectId: "burn-in-effect",
    storageBucket: "burn-in-effect.appspot.com",
    messagingSenderId: "431560971236",
    appId: "1:431560971236:web:b1bea99cbc5cfbf2d66df1"
};

const app = initializeApp(firebaseConfig);

// --------------- LOGIN ---------------

export function createAccount(){
    //TODO: Create user
    /*


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    */
}

export function logIn(email, password, keepLogin){
    const auth = getAuth();

    if (keepLogin) setPersistence(auth, 'local');
    else setPersistence(auth, 'session');

    signInWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
        const user = userInfo.user;
        if(keepLogin) localStorage.setItem('user', JSON.stringify(user));
    })
    .catch((error) => {
        const eCode = error.code;
        const eMessage=error.message;
        console.log(eCode, eMessage);
    });
}

export function logOut(){
  const auth = getAuth();
  signOut(auth);
  localStorage.removeItem('user');
}

export function checkUser(){
  const auth = getAuth();
  let uid;
  try{
    uid=auth.currentUser.uid;
  }
  catch(e){
    uid=false;
  }
  if(uid===false) return false;
  else return true;
}

// --------------- DATABASE ---------------

