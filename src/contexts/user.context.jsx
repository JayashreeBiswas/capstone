import {createContext, useState, useEffect} from 'react';
import {onAuthStateChangedListner, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

// as the actual value we want to access
export const UserContext = createContext({
	currentUser: null,	//context also needs an initial value so.... "null"
	setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = {currentUser, setCurrentUser}

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner((user) => {
			if(user){
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
			console.log(user);
		});
	}, [])
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}