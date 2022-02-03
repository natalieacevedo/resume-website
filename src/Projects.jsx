import React, { useState, useEffect} from "react";
import axios from "axios";
import AddNewProject from './AddNewProject';
import DetailedProjects from './DetailedProjects';


function Projects(){

const [addProjects, addProjectsFun] = useState(false);
const [listOfProjects, setListOfProjects] = useState([]);

function list(){
    addProjectsFun(!addProjects);

};

function getProjects(){

    axios.get('http://localhost:8010/api/projects/')
    .then(res => {
        console.log(res.data);
        setListOfProjects(res.data);

    })
    .catch(err => console.log(err))

};

useEffect(getProjects, []);

if(!listOfProjects || listOfProjects.length === 0){
    return (
        <div>
        <h1>I am sorry there are not events saved, create some first!</h1>
        <button className='listbutton'onClick={list}>Add a new Project</button>
        {addProjects && <AddNewProject/>}
        </div>
    )
}else {

return (
    <div>
    <h1 className='main_title_project'>A curated list of all of my beautiful Projects</h1>
    <button className='listbutton'onClick={list}>Add a new Project</button>
    {addProjects && <AddNewProject/>}

    <DetailedProjects info={listOfProjects}/>
    </div>
    
)

}


};

export default Projects;