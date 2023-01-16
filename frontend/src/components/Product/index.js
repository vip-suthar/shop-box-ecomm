import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, detailsProductUnload } from '../../actions/productActions';
import ProductDetails from './ProductDetails';
import RecmProducts from './RecmProducts';

function Product(props) {

  const { loading, data, error } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailsProduct(id));
    return () => {
      dispatch(detailsProductUnload());
    };
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!!</div>;

  return (
    <>
      <ProductDetails />
      <RecmProducts />
    </>
  );
}
export default Product;
