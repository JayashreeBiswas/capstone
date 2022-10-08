import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
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
	return(
		<div>
			<h1>SignIn</h1>
			<button onClick={logGoogleUser}>
			 	Sign In with Google Popup
			</button>
		</div>
	);
}

export default SignIn;