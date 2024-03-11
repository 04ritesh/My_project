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
import { Branch, Branch1, Branch2, Branch3, Branch4, Branch5, Branch6, Branch7 } from './Branch';
import { College } from './College';
import { Coll } from './MenuContainer';
const IemPage = ({nmae}) => {
  console.log({nmae}.nmae)
  const [ifilter, setiFilter] = useState(null);
    const [semester,setsemester]=useState(null);
  const [branch,setbranch]=useState(null);
  const [filter, setFilter] = useState(null);
  const [subject, setSubject] = useState(null);
 
  const [{ foodItems }, dispatch] = useStateValue();

//just checking is fooditems coming 
useEffect(() => {
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data)
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  fetchData();
}, []);

  return (
    <div>
    <div className="targer-section" >
  
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto mb-3">
         Choose Your semester
        </p>
    </div>
        <div className='flex space-x-4 overflow-auto pt-4 cursor-pointer'>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("1st semester")}}>
          <Card1 sem1={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("2nd semester")}}>
          <Card2 sem2={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("3rd semester")}}>
          <Card3 sem3={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("4th semester")}}>
          <Card4 sem4={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("5th semester")}}>
          <Card5 sem5={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("6th semester")}}>
          <Card6 sem6={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("7th semester")}}>
          <Card7 sem7={semester} />
        </motion.div>
        <motion.div whileTap={{scale:0.6}} onClick={()=>{setsemester("8th semester")}}>
          <Card8 sem8={semester} />
        </motion.div>
        </div>

    <div className="p-6 m-5 ">
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto ">
         Choose Your Branch
        </p>
    </div>
    <div className='flex space-x-4 overflow-auto cursor-pointer'>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("IT")}}>
       <Branch1 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("CSE CORE")}}>
       <Branch2 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("ECE")}}>
       <Branch3 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("MECH")}}>
       <Branch4 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("EE")}}>
       <Branch5 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("IOT")}}>
       <Branch6 s1={branch}/>
    </div>
    <div whileTap={{scale:0.6}} onClick={()=>{setbranch("CSBS")}}>
       <Branch7 s1={branch}/>
    </div>
    </div>
    <div className="p-6 m-5">
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto ">
         Choose Subject
        </p>
    </div>
    
{/* 
     <div className="grid grid-cols-5 gap-2">
    {SubjectData &&
        SubjectData.map((data) =>
            semester === data.semester && branch === data.branch ? (
                <motion.div
                    whileTap={{ scale: 0.6 }}
                    key={data.id}
                    className={`group ${
                        semester === data.semester && branch === data.branch ? "bg-stone-500" : "bg-black"
                    } w-48 min-w-[94px] h-48 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-400 text-xl font-bold`}
                    onClick={() => {
                        setSubject(data.subject);
                    }}
                >
                    {data.subject}
                </motion.div>
            ) : null
        )}
</div> */}

<div className="grid grid-cols-5 gap-2">
    {foodItems &&
        foodItems.map((data) =>
            semester === data.semester && branch === data.title && data.category==={nmae}.nmae  ? (
                <motion.div
                    whileTap={{ scale: 0.6 }
                    }
                    key={data.id}
                    className={`group ${
                        semester === data.semester && branch === data.title  && data.category==={nmae}.nmae? "bg-stone-500" : "bg-black"
                    } w-48 min-w-[94px] h-48 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-400 text-xl font-bold`}
                    onClick={() => {
                        setSubject(data.Subject);
                    }}
                >
                    {data.Subject}
                </motion.div>
            ) :<></>
        )}
</div>


      {/* <motion.div  
      whileTap={{scale:0.6}}
      >
     <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto hover:bg-orange-500 p-3 ">
        Get Questions 
        </p>
     </motion.div> */}
     
       <RowContainer
        subjectn={subject}
        semestern={semester}
       />
    </div>
  )
}

export default IemPage;