import { useEffect } from 'react';

import Navbar from '../../pages/UI/Navbar/navbar';
import Footer from '../../pages/UI/Footer/footer';
import Section1 from '../../pages/web/inicio/Seccion_1/section1';
import Section3 from '../../pages/web/inicio/Section_3/Section3';
import Section4 from '../../pages/web/inicio/Section_4/Section4';
import Section5 from '../../pages/web/inicio/Section_5/Section5';   

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Navbar/>
        <Section1/>
        <Section5/>
        {/* <Section2/> */}
        <Section3/>
        <Section4/>
        <Footer/>

    </>
    )
}