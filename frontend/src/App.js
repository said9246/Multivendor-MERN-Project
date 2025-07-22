import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,    
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes/Routes.js";

// import Login from './pages/Login'
// import SignupPage from './pages/SignupPage'
import { loadUser } from './redux/actions/user';
import Store from './redux/store';
// import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
// import BestSellingPage from './pages/BestSellingPage';
// import EventsPage from './pages/EventsPage';
// import FAQPage from './pages/FAQPage';

const App = () => {
  useEffect(()=>{
    Store.dispatch(loadUser())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/sign-Up' element={<SignupPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path='/best-selling' element={<BestSellingPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
      
      </Routes>
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </BrowserRouter>
  )
}

export default App
