import {BrowserRouter, Route, Routes} from 'react-router'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Info from './pages/Info'
import About from './pages/About'
import Account from './pages/Account'
import Checkout from './pages/Checkout'
import CommerceProducts from './pages/Commerce-Products'
import Contact from './pages/Contact'
import ProductDetailsPage from './pages/Product-Details-Page'
import Wishlist from './pages/Wishlist'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'






const App = () => {
  
  return (
    <BrowserRouter>
         <Routes>
           <Route path='/' element={<Layout/>} >
                 <Route path='/Info/:id' element={<Info/>}/>
                 <Route index element={<HomePage/>}/>
                 <Route path='/About' element={<About/>}/>
                 <Route path='/Account' element={<Account/>}/>
                 <Route path='/Cart' element={<Cart/>}/>
                 <Route path='/Checkout' element={<Checkout/>}/>
                 <Route path='/CommerceProducts' element={<CommerceProducts/>}/>
                 <Route path='/Contact' element={<Contact/>}/>
                 <Route path='/ProductDetailsPage' element={<ProductDetailsPage/>}/>
                 <Route path='/Wishlist' element={<Wishlist/>}/>
                 <Route path='/LogIn' element={<LogIn/>}/>
                 <Route path='/SignUp' element={<SignUp/>}/>
           </Route>
         </Routes>
    </BrowserRouter>
  )
}

export default App

