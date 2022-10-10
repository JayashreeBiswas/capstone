import {useState, useEffect} from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-in-form.styles.scss';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
//second way is create an object for the form and store all the data in it and use that in useState...

const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {
	// // first way of storing and using the form fields....
	// const [] = useState('');
	// const [] = useState('');
	// const [] = useState('');
	// const [] = useState('');

	const [formFields, setFormFields] = useState(defaultFormFields);
	const {email, password} = formFields;

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const changeHandler = (event) => {
		const {name, value} = event.target;

		setFormFields({...formFields, [name]: value});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		try{
			const response = await signInUserWithEmailAndPassword(email, password);
			console.log(response);
			resetFormFields();
			
		}catch(error){
			switch(error.code){
				case 'auth/wrong-password': alert("Incorrect Password!!");
				break;
				case 'auth/user-not-found': alert("User doesn't exist");
				break;
				default: console.log(error);
			}
		}
	}

	const signInWithGoogle = async () => {  //used async coz whenever we call some database, it's going to be asynchronous.... 
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
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>

				<FormInput label="Email" type="email" name="email" required onChange={changeHandler} value={email} />
				{/*<label>Email</label>
				<input type="email" name="email" required onChange={changeHandler} value={email}/>*/}

				<FormInput label="Password" type="password" name="password" required onChange={changeHandler} value={password} />
				{/*<label>Password</label>
				<input type="password" name="password" required onChange={changeHandler} value={password}/>*/}

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
				</div>
			</form>
		</div>
	);
}

export default SignInForm;