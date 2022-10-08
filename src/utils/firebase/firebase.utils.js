// connection to our database (using firebase(db config.))!!!
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAJhXUWmW1_g8FYWZi_WA-v1-Q3dyIRr0",
  authDomain: "crwn-clothing-db-525d1.firebaseapp.com",
  projectId: "crwn-clothing-db-525d1",
  storageBucket: "crwn-clothing-db-525d1.appspot.com",
  messagingSenderId: "465646883001",
  appId: "1:465646883001:web:a007ddb8704833ac644b68"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	"prompt": "select_account"
}); // setCustomParameter will take some object as a parameter

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); // doc() takes 3 arguments - database, collections(table), some identifier like unique id....
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //id user document does not exist - (create/set the document with data from userAuth in my collection(table))
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date(); //by this we'll know when the user had signedIN...
    try{
      await setDoc(userDocRef, {displayName, email, createdAt}) //takes 2 arguments - the doc(which was created earlier) and {fields dat we wanna to save}
    }catch(error){
      console.log("error creating the user", error.message);
    }
  }

  //if user document exists
  return userDocRef;
  // return userDocRef
}