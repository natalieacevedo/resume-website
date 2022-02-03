import React, { useState, useEffect} from "react";
import axios from "axios";



function Contact(){

const [submitted, setSubmitted] = useState(false);

const [info,addInfo] = useState({
    name:"",
    email:"",
    message:""
});

function submit(e){
    console.log('the info went to the table')
    setSubmitted(true);
    axios.post('http://localhost:8010/api/contact', info)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

};

function handle(e){
    const newData = {...info};
    newData[e.target.id] = e.target.value;
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

 <form onSubmit={(e) => submit(e)}>

      <div className="mb-3 pt-0">
        <input
          id="name"
          type="text"
          onChange={(e) => handle(e)}
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required

        />

      </div>

      <div className="mb-3 pt-0">

        <input
        id="email"
          type="email"
        onChange={(e) => handle(e)}
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required

        />

      </div>

      <div className="mb-3 pt-0">

        <textarea
        id="message"
         onChange={(e) => handle(e)}
          placeholder="Your message"

          name="message"

          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required

        />

      </div>

      <div className="mb-3 pt-0">

        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

          type="submit"
        >

          Send a message
        </button>
      </div>
<h2>No time for styling</h2>
    </form>

    

  );




};

export default Contact;