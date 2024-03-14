import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './user/component/Footer/Footer';
import Header from './user/component/Header/Header';
import Home from './user/container/Home/Home';
import Shop from './user/container/Shop/Shop';
import Shop_detail from './user/container/Shop Detail/Shop_detail';
import Crat from './user/container/Crat/Crat';
import Chackout from './user/container/Cheakout/Chackout';
import Testimonial from './user/container/testimonial/Testimonial'
import Page from './user/container/404page/404page';
import Contact from './user/container/contact/Contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Shop" element={<Shop />} >
          <Route exact path="Home" element={<Home />} />
          <Route exact path="Page" element={<Page />} />
        </Route>
        <Route exact path='/Shop_detail' element={<Shop_detail />} />
        <Route exact path='/Crat' element={<Crat />} />
        <Route exact path='/Chackout' element={<Chackout />} />
        <Route exact path='/Testimonial' element={<Testimonial />} />
        <Route exact path='/404page' element={<Page />} />
        <Route exact path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
