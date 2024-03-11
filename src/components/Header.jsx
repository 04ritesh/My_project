import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; 
// import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import aboutus from './AboutUs'
import logo from '../img/logo.png';
import avatar from '../img/avatar.png'
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { async } from '@firebase/util';
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/stateProvider';
import MenuContainer from './MenuContainer';
const Header = () => {
const firebaseauth = getAuth(app);
const provider = new GoogleAuthProvider();
const [{user},dispatch]=useStateValue();
const [isMenu, setIsMenu] = useState(true);

  const login = async ()=>{
           console.log(user)
           if(!user){
            const {
              user: {providerData},
            } = await signInWithPopup(firebaseauth,provider);
             dispatch({
              type: actionType.SET_USER,
                 user: providerData[0],
             });
             localStorage.setItem('user',JSON.stringify(providerData[0]));
          }
  else{
    setIsMenu(!isMenu)
  }
    
   
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
     

    <div className='fixed  z-50 w-screen p-4 bg-slate-300 px-16'>
      {/* For Destop and tablets */}
      <div className='hidden md:flex w-full  items-center justify-between'>
    <div className='flex items-center  gap-2'>
    <FontAwesomeIcon className='h-8 text-green-500' icon={faBrain} />
    <a  href='./' className='geeksw text-2xl pl-2 pt-1 '>geeks Pal</a>
    {/* <a href="#">more</a> */}
    {/* <faBrain className='text-2xl h-20 w-20 z-50 text-green-500'/> */}
    </div>

     <div className='flex items-center gap-8'>
     <ul className='flex items-center gap-8 cursor-pointer'>
     <a href='./'>
     <motion.li whileTap={{scale:0.9}}>Home</motion.li>
     </a>
          <a href='./'>
          <motion.li whileTap={{scale:0.9}}>Menu</motion.li>
          </a>
    
      <Link to={'#aboutus'}>
      <motion.li whileTap={{ scale: 0.9 }}>About Us</motion.li>
      </Link>
      
        
            <motion.li whileTap={{scale:0.9}}>Services</motion.li>
           
        </ul>
        <div className='relative'>
        <motion.img
         whileTap={{scale:0.6}} 
        src={user ? user.photoURL : avatar}
        // src={avatar}
        className="w-10 h-10 drop-shadow-xl cursor-pointer rounded-full" 
        alt='profile' onClick={login}/>
       {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "satyamaman87@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
        </div>
     </div>
      </div>

      {/* For Mobiles */}
      <div>

      </div>
    </div>
 
  )
}

export default Header;
