import React from 'react'

export const Semester = () => {
  return (
    <div>
      <div id='target-section' style={{backgroundImage:`url(${bgm2})`}} class='bg-cover bg-blend-overlay mt-10' >
  <div className="">
      <div className=" align-middle flex w-full overflow-x-scroll px-1">
        <div className=" column"
        onClick={()=>{
              setsemester("1st semester")
              console.log(semester);
            }} >
          <motion.div 
          whileTap={{scale:0.6}}
          className={`card  w-52 flex items-center justify-start ${
                   semester === "1st semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      } >
            <div className="txt">
              <h1 className="font-bold text-2xl ">1st <br /> Semester</h1>
            </div>
          </motion.div>
        </div>
        <div className=" column"
        onClick={()=>{
              setsemester("2nd semester")  
            }}>
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "2nd semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1 className="font-bold text-2xl">2nd <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
       

            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("3rd semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "3rd semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">3rd <br /> Semester</h1>
             
            </div>
           
            <div className="ico-card">
            
            
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("4th semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "4th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">4th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
          
          
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("5th semester")
            }}
        >
          <motion.div
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "5th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">5th <br /> Semester</h1>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("6th semester")
              console.log(semester);
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "6th semester"
                      ? "bg-blue-500"   
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">6th <br /> Semester</h1>
            </div>

          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("7th semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "7th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">7th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
      
      
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 col-lg-4 column"
          onClick={()=>{
              setsemester("8th semester")
            }}
        >
          <motion.div  
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "8th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">8th<br /> Semester</h1>
             
            </div>
            
            <div className="ico-card">
          
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
