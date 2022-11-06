import './button.styles.scss';
// import {BaseButton, InvertedButton, GoogleSignInButton} from './button.styles';

// after using styled component ---------------------

// we have 3 typs of btns - default, inverted and google sign-in
// export const button_type_classes = {
// 	base: 'base',
// 	google: 'google-sign-in',
// 	inverted: 'inverted'
// };

// const getButton = (buttonType = button_type_classes.base) => (
// 	{
// 		[button_type_classes.base]: BaseButton,
// 		[button_type_classes.inverted]: InvertedButton,
// 		[button_type_classes.google]: GoogleSignInButton
// 	}[buttonType]);

// // export const CustomButton = (buttonType) => getButton(buttonType);
// const Button = ({children, buttonType, ...otherProps}) => {
// 	const CustomButton = getButton(buttonType);
// 	return <CustomButton {...otherProps}>{children}</CustomButton>;
// }
// export default Button;



// before using styled component ---------------------

// we have 3 typs of btns - default, inverted and google sign-in
const button_type_classes = {
	google: 'google-sign-in',
	inverted: 'inverted'
};
const Button = ({children, buttonType, ...otherProps}) => {
	return(
		<button className={`button-container ${button_type_classes[buttonType]}`} {...otherProps}>{children}</button>
	);
}
export default Button;