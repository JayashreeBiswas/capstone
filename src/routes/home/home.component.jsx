import {Outlet} from 'react-router-dom';
import '../../categories.styles.scss';
import Categories from '../../components/categories/categories';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
}

export default Home;
