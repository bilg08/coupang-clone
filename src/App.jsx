import { Routes,Route } from 'react-router-dom';
import {LogIn, SignUp } from './pages/LogIn'
import Homepage from './pages/Homepage';
import {ProductDetail} from './components/ProductDetail'
import {Cart} from './pages/Cart'
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/login' element={ <LogIn />} />
        <Route path='/signup' element={ <SignUp />} />
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
