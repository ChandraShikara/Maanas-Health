
import React  from 'react'
// import axios from 'axios';
import { Link} from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import { store } from './App';
import "./Css/App.css";
import './Css/home.css'
const Project = () => {
  
  return (
      <div className='pbody'>
        <h1 className='sh1' id='h1'>M</h1><h1 id='h2' className='sh1'>a</h1><h1 id='h3' className='sh1'>n</h1><h1 id='h4' className='sh1'>a</h1><h1 id='h5' className='sh1'>s</h1> <h1 id='h6' className='sh1'>H</h1><h1 id='h7' className='sh1'>e</h1><h1 id='h8' className='sh1'>a</h1><h1 id='h9' className='sh1'>l</h1><h1 id='h10' className='sh1'>t</h1><h1 id='h11' className='sh1'>h</h1>
        <div className="ps">
         <Link to="/teacherlogin"> <button className="pp" id="a1"><span className="icon fa fa-chalkboard-teacher icn"></span>
            Teacher Login</button></Link>
         <Link to="/studentlogin"> <button className="pp" id="a2"><span className="icon fa fa-user-graduate icn"></span>
            Student Login</button></Link>
        </div>
        <h3 className="h3"> A peaceful mind  fosters a vibrant soul</h3>
      <div className="signup">
        <p className='pnew'>---Only for Students---</p>
        <h1 className='h1new'>New Here?</h1>
        <Link to="/stu"><button id="btnnew">Sign-UP</button></Link>
      </div>
      </div>
  );
};

export default Project;
