import logo from './logo.svg';
import './App.css';
import Hero_section from './component/Hero_section';
import Over_services from './component/Over_services';
import Make_unique from './component/Make_unique';
import Construction from './component/Construction';
import Constrution_worker from './component/Constrution_worker';
import Constrution_company from './component/Constrution_company';
import Bulding from './component/Bulding';
import Testimonials from './component/Testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Last_section from './component/Last_section';
import Backtotop from './component/common/Bacektotop';
import Preloader from './component/common/Preloader';
import {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
     useEffect(() => {
       Aos.init({
         duration: 1500,
       });
     }, [])
  return (
    <div className='overflow-hidden'>
       < Hero_section/>
      <Over_services />
      <Make_unique />
      <Construction />
      < Constrution_worker/>
      < Constrution_company />
      <Bulding />
      <Testimonials />
      < Last_section />
      < Backtotop />
      <Preloader/>
    </div>
  );
}

export default App;