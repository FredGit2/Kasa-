import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Footer from './components/Footer';
import Housing from './pages/Housing';

const Router = () => {
    return(
        <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Appartments/:id' element={<Housing />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>  
            <Footer/>
        </BrowserRouter>
    );
};

export default Router;