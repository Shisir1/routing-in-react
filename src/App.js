import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ThankYouPage from './pages/ThankYouPage';



/*

Build a very small minimal website with 4 pages.

1. Homepage -> /

<HomePage />

2. About Page -> /about

<AboutPage />

3. Contact Page -> /contact

<ContactPage />

4. Privacy & Policy Page -> /privacy-policy

<PrivacyPolicyPage />



Header

The header will have the links to navigate inside our website

Link -> /about

Link -> /contact

Link -> /privacy-policy



Footer

Some description & copyright information

Some additional links



*/



function App() {

return (

<BrowserRouter>

  <Header/>

    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
      <Route path='/thank-you' element={<ThankYouPage/>} />
    </Routes>

  <Footer/>

</BrowserRouter>

);

}



export default App;