
import './styles_components/main.scss';
import Navmenu from './Navmenu';
import Home from './Home';
import Skills from './Skills';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
   
    <BrowserRouter>
     <Navmenu/>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
