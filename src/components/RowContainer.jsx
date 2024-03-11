import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../Context/stateProvider';
import { firestore } from '../firebase.config'; // Import your Firebase configuration
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { actionType } from "../Context/reducer"; 
function App(props) {
  const [{ foodItems }, dispatch] = useStateValue();
  const [clickedImage, setClickedImage] = useState(null);
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
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (

// just checking things


<div className="App p-5 flex flex-wrap gap-4">
{foodItems && foodItems.map(item => (
  item.Subject === props.subjectn && (
    <div className='h-80 w-80 flex' key={item.id}>
      <motion.img
        src={item.imageURL}
        alt={item.title}
        onClick={() => setClickedImage(item.imageURL)}
      />
    </div>
  )
))}
{clickedImage && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={() => setClickedImage(null)}>&times;</span>
      <img src={clickedImage} alt="Enlarged Image" className="enlarged-image" />
    </div>
  </div>
)}
</div>

    
  );
}

export default App;
