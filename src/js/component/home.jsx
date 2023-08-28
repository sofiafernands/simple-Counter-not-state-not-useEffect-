import React from "react";
import SecondsCounter from "../secondscounter.jsx";


const Home = (props) => {
	return (
		<>
		<div>
		<SecondsCounter n1={props.n1} n2={props.n2} n3={props.n3} n4={props.n4} n5={props.n5} n6={props.n6}/>
		</div>
		</>
	);
};

export default Home;
