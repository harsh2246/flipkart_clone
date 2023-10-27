import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SignInSide from  './SignInSide';
import SignUp from './SignUp';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Checkout';
import PaymentForm from './PaymentForm';
import Review from './Review';
import CardsCarousel from './CardsCarousel';
import FooterLinks from './FooterLinks';
import Testing from './Testing';
import Mine from './Mine';
import Full from './Full';
import Productpage from './Productpage';
//import {SignInSide,SignUp} from './Components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignInSide/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment' element={<PaymentForm/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/footer' element={<FooterLinks/>}/>
            <Route path='/ck' element={<Testing/>}/>
            <Route path='/product/:id' element={<Productpage/>}/>
            <Route path='/mine' element={<Mine/>}/>
            <Route path='/full' element={<Full/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

    