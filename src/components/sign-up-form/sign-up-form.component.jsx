import {useState, useEffect, useContext} from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss';
// import {UserContext} from '../../contexts/user.context';
//second way is create an object for the form and store all the data in it and use that in useState...

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const SignUpForm = () => {
	// // first way of storing and using the form fields....
	// const [] = useState('');
	// const [] = useState('');
	// const [] = useState('');
	// const [] = useState('');

	const [formFields, setFormFields] = useState(defaultFormFields);
	const {displayName, email, password, confirmPassword} = formFields;

	console.log(formFields);
	// const {setCurrentUser} = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const changeHandler = (event) => {
		const {name, value} = event.target;

		setFormFields({...formFields, [name]: value});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if(password != confirmPassword){
			alert("password doesn't match!!...");
			return;
		}

		try{
			const {user} = await createAuthUserWithEmailAndPassword(email, password);
			console.log(user);
			await createUserDocumentFromAuth(user, {displayName});
			// setCurrentUser(user);

			resetFormFields();
			
		}catch(error){
			if(error.code == 'auth/weak-password'){
				alert("couldn't create user!! Password should be at least 6 characters.");
			}
			else if(error.code == 'auth/email-already-in-use'){
				alert("couldn't create user!! Email already in use.")
			}
			else{
				console.log("couldn't create user!!", error.message);
			}
		}
	}

	return(
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign Up with your email and password</span>
			<form onSubmit={handleSubmit}>

				{/*using object for input field props...........*/}
				{/*<FormInput label='Display Name' inputOptions={{type:"text", name:"displayName", required: true, onChange:changeHandler, value:displayName}} />*/}
				{/*using spread operator for input field props...........*/}
				<FormInput label='Display Name' type="text" name="displayName" required onChange={changeHandler} value={displayName} />
				{/*<label>Display Name</label>
				<input type="text" name="displayName" required onChange={changeHandler} value={displayName}/>*/} {/*value is coming from formFields(check useState)......*/}

				<FormInput label="Email" type="email" name="email" required onChange={changeHandler} value={email} />
				{/*<label>Email</label>
				<input type="email" name="email" required onChange={changeHandler} value={email}/>*/}

				<FormInput label="Password" type="password" name="password" required onChange={changeHandler} value={password} />
				{/*<label>Password</label>
				<input type="password" name="password" required onChange={changeHandler} value={password}/>*/}

				<FormInput label="Confirm Password" type="password" name="confirmPassword" required onChange={changeHandler} value={confirmPassword} />
				{/*<label>Confirm Password</label>
				<input type="password" name="confirmPassword" required onChange={changeHandler} value={confirmPassword}/>*/}

				<Button buttonType="" type="submit">Sign Up</Button>
			</form>
		</div>
	);
}

export default SignUpForm;