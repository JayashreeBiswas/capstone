import './form-input.component.scss';

const FormInput = ({label, ...otherProps}) => {
	return(
		<div className="group">
			<input className="form-input" {...otherProps} />
			{/*using inline if condition and then ifelse condition*/}
			{label && 
				<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> 
			}{/*making label class dynamic using javascript string interpolation - if there is value in input field(getting from ...otherProps) add shrink */}
		</div>
	);
}

// input props as an object....
// const FormInput = ({label, inputOptions}) => {
// 	return(
// 		<div className="group">
// 			<input className="form-input" {...inputOptions} />
// 			{/*using inline if condition and then ifelse condition*/}
// 			{label && 
// 				<label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> 
// 			}{/*making label class dynamic using javascript string interpolation - if there is value in input field(getting from ...otherProps) add shrink */}
// 		</div>
// 	);
// }

export default FormInput;