import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,

    createUserWithEmailAndPassword, FacebookAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCXdm1XOwAaaLV_2oS0e01ju4Iy9YqXnt8",
    authDomain: "crwn-clothing-db-53ca0.firebaseapp.com",
    projectId: "crwn-clothing-db-53ca0",
    storageBucket: "crwn-clothing-db-53ca0.appspot.com",
    messagingSenderId: "555665134130",
    appId: "1:555665134130:web:ea174ca5beee505c7ee22b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Add Facebook Login
const fbprovider = new FacebookAuthProvider();
fbprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {

    if (!userAuth) {
        return;
    }

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt  = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        }
        catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    //This code returns the userDocRef if it already exists in the database.
    return (userDocRef);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
 if (!email || !password) return;

  return await  createUserWithEmailAndPassword(auth, email, password);
}