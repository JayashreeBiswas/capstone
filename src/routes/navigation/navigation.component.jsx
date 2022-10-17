import {Outlet, Link} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as Crown} from '../../assets/crown.svg';
import './navigation.style.scss';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import Cart from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  // if using observer pattern - no need to use the below code
  // const {currentUser, setCurrentUser} = useContext(UserContext);
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  const {isCartOpen} = useContext(CartContext);

  // if using observer pattern - no need to use the below code just call the signOutUser()
  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   console.log(res);
  //   setCurrentUser(null);
  // }

  return(
    <Fragment>
      <div className="navigation">
      	<Link className="logo-container" to="/">
      		<Crown className="logo" />
      	</Link>
        <div className="nav-links-container">
        	<Link className="nav-link" to="/shop">SHOP</Link>
          {/*{(currentUser)? (<span className="nav-link" onClick={signOutHandler}>SIGN-OUT</span>) : (<Link className="nav-link" to="/auth">SIGN-IN</Link>)}*/}
          {(currentUser)? (<span className="nav-link" onClick={signOutUser}>SIGN-OUT</span>) : (<Link className="nav-link" to="/auth">SIGN-IN</Link>)}
        	<Cart />
        </div>
        {isCartOpen && <CartDropDown />} 
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;