// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';
// import {Outlet} from 'react-router-dom';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth} from '../../utils/firebase/firebase.utils'; // auth will come from getRedirectResult
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

	// //for redirect method(if needed...)
	// useEffect(() => { //useEffect with async using self-invoking function
	// 	(async () => {
	// 		const response = await getRedirectResult(auth);
	// 		console.log(response);
	// 		if(response){
	// 			createUserDocumentFromAuth(response.user);
	// 		}
	// 	})();
	// 	return () => {
	// 		// this now gets called when the component unmounts
	// 	};
	// }, []); 

	const logGoogleUser = async () => {  //used async coz whenever we call some database, it's going to be asynchronous.... 
		const {user} = await signInWithGooglePopup();
		console.log(user);
		// //test/practice
		// const response = await signInWithGooglePopup();
		// console.log(response);
		// const {_tokenResponse} = response;
		// console.log(_tokenResponse.email);
		createUserDocumentFromAuth(user);
	}

	// const logGoogleUserRedirect = async () => {  //used async coz whenever we call some database, it's going to be asynchronous.... 
	// 	const {user} = await signInWithGoogleRedirect(); //beacuse it'll first go the google sign-in page and then redirects back to our page(which'll be a completely new page for browser) we'll need to add/import some things from react {useEffect} and a method from firebase {getRedirectResult})

	// }
	return(
		<div>
			<h1>Sign In</h1>
			<SignInForm />
			<Button buttonType="google" onClick={logGoogleUser}>
			 	Sign In with Google Popup
			</Button>
			<SignUpForm />
			{/*<button onClick={logGoogleUserRedirect}>
			 	Sign In with Google Redirect
			</button>*/}
		</div>
	);
}

export default Authentication;