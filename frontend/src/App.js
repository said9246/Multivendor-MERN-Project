import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  LoginPage,
  SignupPage,
  // ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  // PaymentPage,    
  // OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  
  // SellerActivationPage,
  ShopLoginPage,
  // OrderDetailsPage,
  // TrackOrderPage,
  // UserInbox,
} from "./routes/Routes.js";
//Data about shop only
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  // ShopAllOrders,
  // ShopOrderDetails,
  // ShopAllRefunds,
  // ShopSettingsPage,
  // ShopWithDrawMoneyPage,
  // ShopInboxPage,
} from "./routes/ShopRoutes";


import ShopHomePage from "./pages/Shop/ShopHomePage";



import ProtectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

//
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import { loadUser,loadSeller } from './redux/actions/user';
import Store from './redux/store';


const App = () => {
  useEffect(()=>{
    Store.dispatch(loadUser())
  },[])

   useEffect(() => {
      Store.dispatch(loadUser());
      Store.dispatch(loadSeller());
      Store.dispatch(getAllProducts());
      Store.dispatch(getAllEvents());
      // getStripeApikey();
    }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/sign-Up' element={<SignupPage/>}/>
         <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
           
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path='/best-selling' element={<BestSellingPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route   path="/profile"  element={
                               <ProtectedRoute>
                                 <ProfilePage />
                               </ProtectedRoute>    } />
          <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
             </SellerProtectedRoute>
          }
        />

          <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
          </SellerProtectedRoute>
          }
        />

         <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />

         <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />


         <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
            /> 


              <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />

        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />


          <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

      
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
