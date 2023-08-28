import React from "react";
import { stopInterval, continueInterval,pauseInterval, alternateMode } from "./index.js";
import time from "../img/time.png";
import "../styles/secondscounter.css";


let status = true;

const SecondsCounter = (props) => {
  console.log(props.n1);
   return ( 

   <div className="container text-center" style={{ height:"100px", width:"800px",backgroundColor:"#8f6d11",borderRadius:"20px"}}>
   <div className="row row-cols-7" style={{marginBottom:"30px",color:"white", marginTop:"50px"}}>
     <div className="col" style={{fontSize:"60px"}}>⏳</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n6}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n5}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n4}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n3}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n2}</div>
     <div className="col" style={{fontSize:"60px"}}>{props.n1}</div>
   </div>

   <div>
     <img src={time}/>
   </div>

   <button className="restart" onClick={stopInterval} style={{backgroundColor:"#619343",borderRadius:"10px",marginRight:"30px"}}><b>Restart</b></button>
   <button className="continue" onClick={continueInterval} style={{backgroundColor:"#FFC930",borderRadius:"10px",marginRight:"30px"}}><b>Continue</b></button>
   <button className="pause" onClick={pauseInterval} style={{backgroundColor:"#852929",borderRadius:"10px",marginRight:"30px"}}><b>Pause</b></button>
   <button className="regressive" onClick={alternateMode} style={{backgroundColor:"#70DCDB ",borderRadius:"10px"}}> <b>Regressive</b> </button>
   </div>
    );
};

export default SecondsCounter;