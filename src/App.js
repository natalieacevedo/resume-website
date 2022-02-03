
import './styles_components/main.scss';
import Navmenu from './Navmenu';
import Home from './Home';
import Skills from './Skills';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';


function App() {
  return (
    <div>
   
    <BrowserRouter>
     <Navmenu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path= "/projects" element={<Projects/>}/>
    <Route path="/education" element={<Education/>}/>
     <Route path="/experience" element={<Experience/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
