import { useEffect } from 'react';

import Navbar from '../../pages/UI/Navbar/navbar';
import Footer from '../../pages/UI/Footer/footer';

import Section1 from '../../pages/web/Contacto/Section_1/section1';

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Navbar/>

        <Section1/>
        
        <Footer/>

    </>
    )
}