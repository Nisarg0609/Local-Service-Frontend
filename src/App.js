import './App.css';
import {Routes,Route, Outlet, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import PostAService from './components/Post A Service/PostAService';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Auth from './components/Auth/Auth';
import Providers from './components/Providers/Providers';

function App() {
  return (
    <>
        <Navbar/>
          <Routes>
            <Route index path='/' Component={Home}/>
            <Route index path='/services' Component={Services}/>
            <Route index path='/postService' Component={PostAService}/>
            <Route index path='/providers' Component={Providers}/>
            <Route index path='/aboutUs' Component={AboutUs}/>
            <Route index path='/blog' Component={Blog}/>
            <Route index path='/contactUs' Component={ContactUs}/>
            <Route index path='/signIn' Component={Auth}/>
            
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
