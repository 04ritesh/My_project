import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import { Link } from 'react-router-dom';
import ECE from "../img/ECE.jpg"
import EE from "../img/EEF.jpg"
import CSE from "../img/CSE.jpg"
import CSBS from "../img/CSBS.jpg"
import bgm2      from "../img/bgm2.jpg"

import MECH from "../img/MECH.jpg"
import IOT from "../img/IOT.jpg"
import { semester } from "../utils/data";
import { IoFastFood, IoBook } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";

import { TbBusinessplan } from "react-icons/tb";
import {  FcElectronics} from "react-icons/fc";
import { GiElectricalResistance,GiMechanicalArm,GiRadioTower} from "react-icons/gi";
import { useState } from 'react'
import { HashLink as HLink } from 'react-router-hash-link'; 
import Fquestions from './Fquestions';
import AllQuestions from './AllQuestions';
import {SubjectData} from '../utils/SubjectData' 
import { iemd } from '../utils/questionData';
import { RowContainer } from '.';
import { getAllFoodItems } from '../utils/firebaseFunctions';
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/stateProvider';
import { Card, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8 } from './Card';
import IT from "../img/IT.jpg"
import { GrTechnology } from "react-icons/gr";

export const Branch1 = ({s1}) => {
  return (
    <div> 
    <motion.div
     whileTap={{scale:0.6}}
  className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="IT"
                ? "bg-blue-200"
                : "bg-white"
                 }`
                }
   >
   
  <div
   class="col-lg-3 col-md-6 mb-4 mb-lg-0" 
  style={{ backgroundImage: `url(${IT})`,
   backgroundSize:"cover"
   }}>
 
<div class="card rounded shadow-sm border-0 w-52">
  <div class="card-body p-4 w-52">
    <i className="fa font-bold text-3xl m-4"></i>
    <ul class="list-inline small">
      <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
    </ul>
  </div>
</div>
</div>
<div className="flex">
<h5 class="text-dark  font-bold text-2xl">Information Technology </h5>
<i className="fa fa-GrTechnology font-bold text-3xl m-4"><GrTechnology className="text-3xl"/></i>
</div>
  </motion.div>
</div>
  )
}

export const Branch2 = ({s1}) => {
    return (
      <div> 
     <motion.div 
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="CSE CORE"
                ? "bg-pink-200"
                : "bg-white"
                 }`
                }
        class="row pb-5 mb-1 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" style={{ backgroundImage: `url(${CSE})`,
         backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
         
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
  <div className="flex pt-[-6]">
  <h5 class="text-dark  font-bold text-2xl pt-3">CSE CORE </h5>
    
    
  </div>
        </motion.div>
  </div>
    )
  }

  export const Branch3 = ({s1}) => {
    return (
      <div> 
     <motion.div
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="ECE"
                ? "bg-blue-300"
                : "bg-white"
                 }`
                }
         class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" style={{ backgroundImage: `url(${ECE})`,
        backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
        
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex">
    <h5 class="text-dark  font-bold text-2xl pt-3">ECE </h5>
    <i className="fa  font-bold text-3xl m-4"><FcElectronics  className="text-4xl"/></i>
    </div>
        </motion.div>
  </div>
    )
  }

  export const Branch4 = ({s1}) => {
    return (
      <div> 
      <motion.div 
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="MECH"
                ? "bg-purple-200"
                : "bg-white"
                 }`
                }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div class="card rounded shadow-sm border-0 w-52"  style={{ backgroundImage: `url(${MECH})`,
       backgroundSize:"cover"
       }}>
        <div class="card-body p-4 w-52">
         
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex">
    <h5 class="text-dark  font-bold text-2xl pt-4">Mechanical</h5>
    <i className="fa  font-bold text-3xl m-4"><GiMechanicalArm className="text-5xl"/></i>
    </div>
        </motion.div>
  </div>
    )
  }

  export const Branch5 = ({s1}) => {
    return (
      <div> 
      <motion.div 
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="EE"
                ? "bg-gray-200"
                : "bg-white"
                 }`
                }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        style={{ backgroundImage: `url(${EE})`,
         backgroundSize:"cover"
         }}>
        
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-6 w-52">
        
     
          <i className="fa  font-bold text-3xl m-4"></i>
        </div>
      </div>
    </div>
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-6">EE </h5>
  
  <i className="fa fa-wire font-bold text-3xl m-4 pl-2 pt-[-2rem] "><GiElectricalResistance className="text-5xl"/></i>
  </div>
        </motion.div>
  </div>
    )
  }

  export const Branch6 = ({s1}) => {
    return (
      <div> 
         <motion.div 
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="IOT"
                ? "bg-blue-300"
                : "bg-white"
                 }`
                }
        class="row pb-5 mb-4 p-8 " >
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"  style={{ backgroundImage: `url(${IOT})`,
         backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
        
          
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex">
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-3">CSE IOT</h5>
 
 <i className="fa font-bold text-3xl m-4"><GiRadioTower className="text-4xl"/></i>
  </div>
    </div>
        </motion.div>
  </div>
    )
  }

  export const Branch7 = ({s1}) => {
    return (
      <div> 
      <motion.div 
        whileTap={{scale:0.6}}
        className={`row pb-5 mb-4 p-8 w-72 ${
            s1==="CSBS"
                ? "bg-blue-200"
                : "bg-white"
                 }`
                }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        style={{ backgroundImage: `url(${CSBS})`,
         backgroundSize:"cover"
         }}>
        
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
 
      
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-4"> CSBS </h5>
    <i className="fa font-bold text-3xl m-4"><TbBusinessplan/></i>
  </div>
        </motion.div>
  </div>
    )
  }
