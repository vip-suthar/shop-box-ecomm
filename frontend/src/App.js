import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import OrderReview from './components/OrderReview';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import PaymentScreen from './screens/PaymentScreen';
// import OrderScreen from './screens/OrderScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import OrdersScreen from './screens/OrdersScreen';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order-review" element={<OrderReview />} />
          {/* <Route path="/payment" element={<PaymentScreen/>} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/profile" element={<ProfileScreen/>} /> */}
          {/* <Route path="/orders" element={<OrdersScreen/>} /> */}
          {/* <Route path="/order/:id" element={<OrderScreen/>} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
