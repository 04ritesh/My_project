import React, { useEffect, useState } from 'react'
import {SubjectData} from "../utils/SubjectData"
import { useParams } from 'react-router-dom';
import { semester } from '../utils/data';


function AllQuestions(props) {
  console.log(props.subjectn)
  const filteredData = SubjectData.filter(
    (data) =>
     data.subject===props.subjectn
  );
  return (
    <div
    className='flex items-center justify-center'
    >
  { filteredData &&  filteredData.imageSrc && filteredData.imageSrc.map((image, index) => (
        <img key={index} src={image} alt={`Compiler Design ${index + 1}`} />
      ))}
    </div>
  )
}
export default AllQuestions;
