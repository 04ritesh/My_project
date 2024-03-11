import React, { useEffect, useState } from "react";
import { storage } from "../firebase.config";
import { IoFastFood, IoBook } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import {  FcElectronics} from "react-icons/fc";
import { GiElectricalResistance,GiMechanicalArm,GiRadioTower} from "react-icons/gi";
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import ECE from "../img/ECE.jpg"
import EE from "../img/EEF.jpg"
import CSE from "../img/CSE.jpg"
import CSBS from "../img/CSBS.jpg"
import IT from "../img/IT.jpg"
import MECH from "../img/MECH.jpg"
import IOT from "../img/IOT.jpg"
import { semester } from "../utils/data";
import RowContainer from "./RowContainer";
import { useStateValue } from "../Context/stateProvider";
import srmi from "../img/srmi.jpg"
// import AllQuestions from "./AllQuestions";
import { iemd } from "../utils/questionData";
import IEM from "./IEM";
import IemPage from "./IemPage";
import { College } from "./College";

function  AllQuestions({college}){
  console.log({college})
  const filteredData = iemd.filter(
    (data) =>
      data.college === {college}
  );
  return (
    <div
    className='flex items-center justify-center'
    >
      {filteredData.map((data) => (
     <h1 key={data.id}>data.college</h1>
      ))}
    </div>
  )
}
const MenuContainer = () => {
  const [filter, setFilter] = useState(null);
  const [ifilter, setiFilter] = useState(null);
  const [semester,setsemester]=useState(null);
  const [branch,setbranch]=useState(null);
  const [college,setcollege]=useState(null);
  const [{foodItems},dispatch]=useStateValue();

  const numbers = [1,2,3,4,5,6,7,8];
  var k=null;


  return (

   <section className='w-full my-6' id="menu">
   <div className="w-full flex flex-col items-center justify-center">
   <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
         Choose Your College
        </p>
        {/* Query parameter */}
        <a href={`/question?ifilter=${ifilter}&filter=${filter}`} onclick="window.scrollTo(0, 0); return false;">
     <div className="w-full flex items-center  justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${   
                 filter === category.name  ? "bg-red-500" : "bg-white" 
                   }
              w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-600 `}
                onClick={() =>{
                  setiFilter(category.imageSrc)
                  setFilter(category.name)
                  
                } 
                
                }
        >

        
         <div className="h-0 w-0 "  style={{ display: 'none' }}>

</div>
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoBook
                    className={`${
                      filter === category.name
                        ? "text-textColor"
                        : "text-black"
                    } group-hover:text-textColor text-lg`}
                  />
                   {/* <FontAwesomeIcon className='h-8 text-green-500' icon={faBrain} /> */}
                </div>
                <p
                  className={`text-sm  ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white flex items-center justify-center font-bold p-2`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
 </a>

   </div>
   {/* <div className=" pt-5 pb-5">
  {categories &&
    categories.map((category) => (
      <div key={category.urlParamName} className="text-center">
        {ifilter === category.imageSrc ? (
          <College imageUrl={category.imageSrc} name={category.urlParamName} />
        ) : (
          <img />
        )}
      </div>
    ))}
</div> */}


   {/* <div id="neg">  
 <motion.div 
    whileTap={{scale:0.6}}
   >
     {
      filter && (
        <a href="/questionsIEM#targer-section">
        <p className="text-4xl m-16 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto hover:bg-orange-500 p-3">
      Click Here to Get Questions
        </p>
        </a>
      )
     }
        </motion.div>
   
        
    </div> */}

   </section>
   
  )
}

export default MenuContainer;
