import { Fragment } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Restaurants from '../components/Restaurants';
import FoodList from '../components/FoodList';
import Products from '../components/Products';

function HomePage() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Restaurants />
        <FoodList />
        <Products />
      </Fragment>
    );

}

export default HomePage;