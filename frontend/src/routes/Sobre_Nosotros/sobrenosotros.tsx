import { useEffect } from 'react';

import Navbar from '../../pages/UI/Navbar/navbar';
import Footer from '../../pages/UI/Footer/footer';

import Section1 from '../../pages/web/Sobre Nosotros/Seccion_1/section1';
import Section2 from '../../pages/web/Sobre Nosotros/Section_2/section2';
import Section3 from '../../pages/web/Sobre Nosotros/Section_3/section3';

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Navbar/>

        <Section1/>
        <Section2/>
        <Section3/>
        
        <Footer/>

    </>
    )
}