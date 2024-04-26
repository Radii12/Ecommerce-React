import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './pages/NotFound';
import NavBar from './Component.js/NavBar/NavBar';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/productCart/ProductCart';
import Wish from './pages/wishlist/wishList';
import Login from './pages/Forms/LogIn';
import SignUP from './pages/Forms/SignUp';

function App() {
  return (
    <div className="App min-vh-100">
    
          

    <BrowserRouter>
    <NavBar/>
    {/* <Header/> */}
    <Switch>
    

    <Route component={Home} path="/" exact/>
    <Route component={ProductDetails} path="/product/:id" exact/>
    <Route component={Cart} path="/cart" exact/>
    <Route component={Wish} path="/wish" exact/>
    <Route component={Login} path="/login" exact/>
    <Route component={SignUP} path="/signup" exact/>
    
    <Route component={NotFound} path="*"/>
    </Switch>
        </BrowserRouter>
    {/* <Login/> */}
    {/* <Forms/> */}
    
    </div>
  );
}

export default App;
