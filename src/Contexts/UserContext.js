import {createContext, useState, useEffect } from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from "../utils/Firebase/Firebase.utils";
import {onAuthStateChanged} from "firebase/auth";

//as the actual value that you want to access
export const UserContext = createContext({

    currentUser: null,
    setCurrentUser: () => null,

});

//this is the actual component
export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    // signOutUser();


    useEffect( () => {
     const unsubscribe =  onAuthStateChangedListener((user) => {
         if (user){
             createUserDocumentFromAuth(user);
         }

         setCurrentUser(user);
         console.log(user);
     })

        return unsubscribe;

    }, [])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}