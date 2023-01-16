import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadHome } from '../../actions/homeActions';

import HeaderCorousel from './HeaderCorousel';
import Features from './Features';
import Categories from './Categories';
import Offers from './Offers';
import Products from './ProductsList';
import Subscribe from './Subscribe';

function Home(props) {

  const { loading, data, error } = useSelector((state) => state.homeData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHome());
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!!</div>;

  return (
    <>
      <HeaderCorousel />
      <Features />
      <Categories />
      <Offers />
      <Products
        title="Trandy Products"
        listName="trndProducts"
      />
      <Subscribe />
      <Products
        title="Recommended Products"
        listName="recmProducts"
      />
    </>
  );
}
export default Home;
