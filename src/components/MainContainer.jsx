import React from 'react'
import ContactUs from './ContactUs';
import { banner } from './index';  
import { MenuContainer } from './index';
import { AboutUs } from './index';
import {Particle} from './index'
import pbg  from '../img/pbg.png'
import {ParticleContainer} from './index'
import {TypingAnimation} from './index'

const MainContainer = () => {
  return (
    
<div id="mainc">
   <div className='w-full mb-56' id="mainc" >
     <div className='w-full mt-5 mb-10 bg-slate-300  flex items-center justify-center'>
    <div className='flex items-center justify-center'>
    <img src={pbg} className='h-full'/>
    
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow-lg text-2xl">
    <TypingAnimation />
    </div>
    </div>
   

     </div>
     </div>
    
   <section>
   
  <MenuContainer/>
   </section>
   <section>
   <AboutUs/>
   </section>
   <section>
   <ContactUs/>
   </section>
   
</div>
     
  )
}

export default MainContainer;
