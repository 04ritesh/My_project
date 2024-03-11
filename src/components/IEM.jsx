import React from 'react'
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import { Link } from 'react-router-dom';
import ECE from "../img/ECE.jpg"
import EE from "../img/EEF.jpg"
import CSE from "../img/CSE.jpg"
import CSBS from "../img/CSBS.jpg"
import IT from "../img/IT.jpg"
import MECH from "../img/MECH.jpg"
import IOT from "../img/IOT.jpg"
import { semester } from "../utils/data";
import { IoFastFood, IoBook } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import {  FcElectronics} from "react-icons/fc";
import { GiElectricalResistance,GiMechanicalArm,GiRadioTower} from "react-icons/gi";
import { useState } from 'react'

const IEM = () => {
    const [ifilter, setiFilter] = useState(null);
    const [semester,setsemester]=useState(null);
  const [branch,setbranch]=useState(null);
  const [filter, setFilter] = useState(null);
  return (
    <section>
    <div className='P-0 M-0'>
       <div className="w-28 h-25 pt-5 pb-5"  >
      {/* nhi ye b nhi hai image wala kch */}
        {categories &&
            categories.map((category) => (
          ifilter==category.imageSrc?  <img src={category.imageSrc} className='w-full h-full'/>:
          <img/> 
            ))}
            <div>
           
            </div>
      </div>
    </div>
    </section>
  )
}

export default IEM;
