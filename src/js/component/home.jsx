import React from "react";



//create your first component
const Home = (props) => {
	return <>
		<div className="styleToCounter">
        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width= "40px" fill="white" ><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 10000000) / 1000000)}</span>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 1000000) / 100000)}</span>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 100000) / 10000)}</span>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 10000) / 1000)}</span>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 1000) / 100)}</span>
        	<span style={{fontSize: "40px"}} >{parseInt((props.seconds % 100) / 10)}</span>
        	<span style={{fontSize: "40px"}} >{props.seconds % 10}</span>
    	</div>
	</>
};

export default Home;
