

import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import ContextApi from './ContextApi';
import "./Css/Home.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const THome = () => {
  const { tokens, setTokens,setstudentreports } = useContext(ContextApi);
  const [studetails, setstudetails] = useState([])
  const navigate = useNavigate();  // Get the navigate function



  useEffect(() => {
    const students = async () => {
      try {
        let studentdetails = await axios.get('http://localhost:3000/studentdetails')
        setstudetails(studentdetails.data)
        console.log(studetails)
      }
      catch (error) {
        console.log(error)
      }
    }
    students()
  }, [tokens.token1]);

  if (!tokens.token1) {
    return <Navigate to="/" />;

  }

  const handleDivClick = async (student) => {
    try {
      console.log(student.email);
      const res = await axios.post('http://localhost:3000/findstudentreports', { studentemail: student.email });
      setstudentreports(res.data);
      if (res.data) {
        navigate('/reports');  // Use navigate function to navigate to '/reports'

      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  
 
  return (
    <div className='universalth'>
      <div className="t">
        <div className="studentdetails">
          <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bold' ,position:'sticky', top:0 ,backgroundColor:'black',color:'whitesmoke'}}>Student Details</p>
          <div className='headerp'><p id='nap'><strong>Name</strong></p><p id='emp'><strong>Email</strong></p><p id='mop'><strong>Mobile</strong></p></div>
          {studetails.map((student) => (
            <div className='studentdetailsdiv' key={student.id} >
              <p id='nap2'>{student.username}</p>
              <p >{student.email}</p>
              <p >{student.mobile}</p>
              {/* Add more details as needed */}
              <button  onClick={() => handleDivClick(student)}>View Reports</button>
            </div>
          ))}
        </div>
      </div>
      <button className='logt' onClick={() => { setTokens({ ...tokens, token1: null }); toast.success("Logged-Out Successfully!", { position: toast.POSITION.TOP_CENTER }) }}>
  <img id="img3" src="https://cdn-icons-png.flaticon.com/128/10405/10405584.png" alt="test" height={20} width={20} />
  Logout
</button>

    </div>
  )
}

export default THome

