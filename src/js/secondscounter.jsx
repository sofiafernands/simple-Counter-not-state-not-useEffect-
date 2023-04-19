import React from "react";
import { stopInterval, continueInterval,pauseInterval, alternateMode } from "./index.js";
let status = true;

const SecondsCounter = (props) => {
  console.log(props.n1);
   return ( 

   <div className="container text-center" style={{ height:"100px", width:"800px",backgroundColor:"black",borderRadius:"20px"}}>
   <div className="row row-cols-7" style={{marginBottom:"30px",color:"white", marginTop:"50px"}}>
     <div className="col" style={{fontSize:"60px"}}>🕒</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n6}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n5}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n4}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n3}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n2}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n1}</div>
   </div>

   <button onClick={stopInterval} style={{backgroundColor:"#7BE38B",borderRadius:"10px",color:"#434646",marginRight:"5px"}}><b>Restart</b></button>
   <button onClick={continueInterval} style={{backgroundColor:"#F1F16F",borderRadius:"10px",color:"#434646",marginRight:"5px"}}><b>Continue</b></button>
   <button onClick={pauseInterval} style={{backgroundColor:"#F35A48",borderRadius:"10px",color:"#434646",marginRight:"5px"}}><b>Pause</b></button>
   <button onClick={alternateMode} style={{backgroundColor:"#70DCDB ",borderRadius:"10px",color:"#434646"}}> <b>Alternate</b> </button>
   


   </div>
    );
};

export default SecondsCounter;