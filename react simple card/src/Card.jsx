import React, { component } from "react";
import { Component } from "react";
import Data from "./data"

function Card
(){

return(
	
	<>{Data.map((vaule)=>{
		return(

		<div style={{height: "fit-content",
			width: "200px",
			background: "#7c898966",
			border: "5px solid black",
			margin: "20px",
			boxShadow: "10px 10px #80808033",
			float:"left",
			backgroundImage:'url("")'}} >
		<img src={vaule.img} style={{height:200,width:200}} />
		<h3 style={{textAlign:"center"}}>{vaule.title}</h3>
		<h4 style={{color:"red",fontSize:10,textAlign:"center"}}>{vaule.caste}</h4>
		<h5 style={{textAlign:"center"}}>{vaule.type}</h5>
		<br />
		</div>


			)
	})}</>

	)


}


export default Card
