
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Signup from './Pages/Signup';
import Forget from './Pages/Forget';
import ShippingMethod from './Pages/ShippingMethod';
import PaymentMethod from './Pages/PaymentMethod';
import { ToastContainer } from "react-toastify";

import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
import Information from './Pages/Information';
import Thankyou from './Pages/Thankyou';
import OrderTimeline from './Pages/OrderTimeline';
import History from './Pages/History';
// import Profile from './Pages/Profile';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />


        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          {/* <Route path="/Other" element={<ShopCategory category="Other"/>}/> */}
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />

          </Route>
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<Forget />} />
          <Route path='/information' element={<Information />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/history" element={<History />} />

          <Route path='/shippingmethod' element={<ShippingMethod />} />
          <Route path='/paymentmethod' element={<PaymentMethod />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/ordertimeline' element={<OrderTimeline />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
