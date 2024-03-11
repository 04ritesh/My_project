import React, { useEffect,Suspense } from 'react'
// import Header from './Components/Header';
// import  MainContainer from './Components/Header';
// import CreateContainer from './Components/Header';

import '@fortawesome/fontawesome-free/css/all.css';
import { AnimatePresence, } from 'framer-motion';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import banner from './img/banner.png';
import { CreateContainer, Header, MainContainer, AllQuestions,IemPage} from './components' 
import { useState } from 'react';
import IEM from './components/IEM';
import { College } from './components/College';


const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const filter = new URLSearchParams(location.search).get('filter');
  const ifilterParam = new URLSearchParams(location.search).get('ifilter');
  
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
     <Header/>
     <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/createItem" element={<CreateContainer />} />
           <Route>
           <Route path="/question" element={<College para={ifilterParam} para2={filter} />} />
           </Route>
            <Route path="/*" element={<MainContainer />} />
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App;

