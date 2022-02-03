import reactlogo from './images/react.png';
import javaScript from './images/jascript.png';
import node from './images/node.png';



function Skills(){









    return (
        <section>
        <h1>My top Skills</h1>
        <img src={reactlogo} alt='logito'/>
        <img src={javaScript} alt ='javascript'/>
        <img src={node} alt='node'/>
        <p style={{fontSize:'5rem', padding:"10px"}}>I still have to add many other skills but not time to do it now Geomar :(</p>
        

        </section>
    )


};


export default Skills;