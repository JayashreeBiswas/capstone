import {useState, useEffect} from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss';
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
			resetFormFields();
			
		}catch(error){
			
		}
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

				<Button buttonType="" type="submit">Sign In</Button>
			</form>
		</div>
	);
}

export default SignInForm;