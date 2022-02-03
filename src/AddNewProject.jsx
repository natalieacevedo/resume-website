import axios from "axios";
import { useState, useEffect } from "react";



function AddNewProject(){
const [submitted, setSubmitted] = useState(false);

const [info, addInfo] = useState({
        nameofaccount: "",
        iban: "",
        paypal: ""
    });

     function submit(e) {
         setSubmitted(true);
        e.preventDefault();
        axios.post('http://localhost:8010/api/projects', info)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    function handle(e) {
        const newData = { ...info };
        newData[e.target.id]=e.target.value
        addInfo(newData);

    }

if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }



return (
    <div>
    <h5>Add a new project</h5>

<form onSubmit={(e) => submit(e)}>

  <label for="fname">Project name:</label><br/>
  <input
  onChange={(e) => handle(e)}
   type="text" id="name" name="name" placeholder="What's in your fridge"/><br/>

  <label for="year">Date the project was made:</label><br/>
  <input
  onChange={(e) => handle(e)}
   type="text" id="date" name="date" placeholder="2021-11-08"/><br/>

  <label for="skills">Skills used in this project:</label><br/>
  <input
  onChange={(e) => handle(e)}
   type="text" id="skills" name="skills" placeholder="react,express,css,mysql"/><br/>
  
  <input type="submit" value="Submit"/>
</form> 
</div>
)

};


export default AddNewProject;