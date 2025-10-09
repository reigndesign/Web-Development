import img01 from "./images/img--01.png";
import img02 from "./images/img--02.png";
import { useState } from "react";
import StageOne from "./jobDetails";



export default function MainHead() {

  return(
    <>

      
      <JobListings />
      <StageOne />
      <ApplicationForm />
    </>
  ) 

}

export function JobListings({ job }) {
  

  return (
    <>
      
      
    
    </>
  );
}


export function ApplicationForm() {
  return (
    <>
      
    </>
  );
}