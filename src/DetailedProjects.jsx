import {Card} from "react-bootstrap";
import ProjectSummary from './ProjectSummary';
import React, { useState, useEffect} from "react";

function DetailedProjects({info}){

const[booleanPic,setBooleanPic]= useState(false);

function setBoolean(){
    setBooleanPic(!true);

};


console.log(info);




return (
    <div>
    <h5 style={{textAlign:'center', marginTop:'15vh'}}>Here is a list of my projects</h5>
    <Card style={{width: '20rem', margin: '0 auto'}} className="text-center">
    
    {info.map((el,i) => (
        <ProjectSummary project={el} />
    ))}
  
 
  <Card.Footer className="stay tuned for more projects"></Card.Footer>
</Card>

    </div>
)





};

export default DetailedProjects;