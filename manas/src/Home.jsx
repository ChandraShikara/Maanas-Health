// // import React,{useContext,useState,useEffect} from 'react'
// // import {store} from './App.jsx'
// // import axios from 'axios'
// // import "./Home.css"
// // import { Navigate } from 'react-router-dom'

// // const Home = () => {
// //   // const [token,setToken]=useContext(store)
// //   const { tokens, setTokens } = useContext(store);
// //   const [data,setdata]=useState(null)
// //   useEffect(() => {
// //       axios.get("http://localhost:5000/home", {
// //         headers: {
// //           'x-token': tokens.token
// //         }
// //       }).then(
// //         res => setdata(res.data)
// //       ).catch((err) => console.log(err));
// //     }, [tokens.token]);

// //   if(!tokens.token){
// //       return <Navigate to="/"/>
// //   }
// //   return (
// //     <div className='universalh'>
// //       <div className="welcome">
// //           <div className='tokendiv'>
// //             {
// //               data &&
// //                 <div>
// //                   <h1 className="home-h1" style={{textAlign:"center"}}>Welcome to Manas Health {data.username}!</h1>
// //                   <pre> </pre>
// //                   <h4 className='home-h4'>A way to peaceful and healthy life</h4>
// //                   <button onClick={()=>setTokens({ ...tokens, token: res.data.token })} className='logout'>Logout</button>
// //                 </div>
// //               }
// //           </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Home

// import React, { useContext, useState, useEffect } from 'react';
// import { store } from './App.jsx';
// import axios from 'axios';
// import "./Home.css";
// import { Navigate, Link } from 'react-router-dom';
// import { FaRegWindowClose } from 'react-icons/fa'

// const Home = () => {
//   const [hedvis, sethedvis] = useState(false)
//   const { tokens, setTokens } = useContext(store);
//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:5000/home", {
//       headers: {
//         'x-token': tokens.token
//       }
//     }).then(
//       res => setdata(res.data)
//     ).catch((err) => console.log(err));
//   }, [tokens.token]);

//   if (!tokens.token) {
//     return <Navigate to="/" />;
//   }


//   //hedvis

//   const hedv = () => {
//     sethedvis(true)
//   }
//   const closehed = () => {
//     sethedvis(false)
//   }
//   return (
//     <div className='universalh'>

//       <div className="welcome">
//         <div className='tokendiv'>
//           {
//             data &&
//             <div>
//               <h1 className="home-h1" style={{ textAlign: "center" }}><span>Welcome {data.username}!</span></h1>
//               <pre> </pre>
//               <h4 className='home-h4'>A way to peaceful and healthy life</h4>
//             </div>
//           }
//         </div>
//         <div className="outerdivinhome1">
//           <div className="indivhome1">
//             <img src="https://i.pinimg.com/736x/54/56/60/545660e075906b91da25ea1955087664.jpg" alt='image' height={345} width={235} />
//           </div>

//           <div className="indivhome2">
//             <Link to="/questions">
//               <button>Take test</button>
//             </Link>
//             <Link to="/report">
//               <button>View Reports</button>
//             </Link>
//             <button onClick={() => setTokens({ ...tokens, token: tokens.token.data })}>Logout</button>
//           </div>

//         </div>
//         <div className="outerdivinhome2">
//           <div onClick={hedv} title='Few habits for mental health' className="innerh"><img src="https://cdn-icons-png.flaticon.com/128/4807/4807765.png" alt="habit" height={35} width={35} />Habits</div>
//           <div onClick={hedv} title='Exercises for relaxtion' className="innerh"><img src="https://cdn-icons-png.flaticon.com/128/9563/9563251.png" alt="brain" height={35} width={35} />Exercises</div>
//           <div onClick={hedv} title='Doctors you can consult?' className="innerh"><img src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png" alt="brain" height={35} width={35} />Doctors</div>
//         </div>
//       </div>
//       <div className={`hed ${hedvis ? "" : "hedvis"}`}>
//         <span onClick={closehed} className="hedclose">< FaRegWindowClose /></span>
//         habits
//       </div>
//       <div className={`hed1 ${hedvis ? "" : "hedvis"}`}>
//         <span onClick={closehed} className="hedclose">< FaRegWindowClose /></span>
//         Exercises
//       </div>
//       <div className={`hed2 ${hedvis ? "" : "hedvis"}`}>
//         <span onClick={closehed} className="hedclose">< FaRegWindowClose /></span>
//         Doctors
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useContext, useState, useEffect } from 'react';
import ContextApi from './ContextApi';
import axios from 'axios';
import './Css/home.css'
import { Navigate, Link } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Home = () => {
  const [habitsVis, setHabitsVis] = useState(false);
  const [exercisesVis, setExercisesVis] = useState(false);
  const [foodVis, setfoodVis] = useState(false);

  const { tokens, setTokens } = useContext(ContextApi);
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/home", {
      headers: {
        'x-token': tokens.token
      }
    }).then(
      res => setdata(res.data)
    ).catch((err) => console.log(err));
  }, [tokens.token]);

  if (!tokens.token) {
    return <Navigate to="/" />;
  }

  // Open the respective div based on the button clicked
  const openDiv = (divName) => {
    setHabitsVis(divName === 'habits');
    setExercisesVis(divName === 'exercises');
    setfoodVis(divName === 'food');
  }

  // Close all divs
  const closeAllDivs = () => {
    setHabitsVis(false);
    setExercisesVis(false);
    setfoodVis(false);
  }

  return (
    <div className='universalh'>
      <div className="welcome">
        <div className='tokendiv'>
         
        </div>
        <div className="outerdivinhome1">
          <div className="indivhome1">
            <h1 className="home-h1" style={{ textAlign: "center" }}><span>Welcome To Manas Health!</span></h1>
           {
            data &&  <h1>
            {data.username}
          </h1>
           }
            <h4 className='home-h4'>A way to peaceful and healthy life</h4>
          </div>

          <div className="indivhome2">
            <Link to="/questions">
              <button><img id="img1" src="https://cdn-icons-png.flaticon.com/128/6403/6403868.png" alt="test" height={20} width={20} />Take test</button>
            </Link>
            <Link to="/awareness">
              <button><img id="img2" src="https://cdn-icons-png.flaticon.com/128/4856/4856968.png" alt="Awareness" height={20} width={20} />Awareness On Mental Health</button>
            </Link>
            <Link to="/doctors">
              <button><img id="img3" src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png" alt="doctor" height={20} width={20} />Doctors</button>
            </Link>
            <button onClick={() => { setTokens({ ...tokens, token: null }), toast.success("Logged-Out Succesfully!", { position: toast.POSITION.TOP_CENTER }) }}><img id="img4" src="https://cdn-icons-png.flaticon.com/128/10405/10405584.png" alt="test" height={20} width={20} />Logout</button>
          </div>
        </div>
        <div className="outerdivinhome2">
          <div onClick={() => { openDiv('habits'); }} title='Few activites for mental health' className="innerh">
            <img src="https://cdn-icons-png.flaticon.com/128/4807/4807765.png" alt="habit" height={35} width={35} />
            <p>Activites</p>
          </div>
          <div onClick={() => { openDiv('exercises'); }} title='Exercises for relaxation' className="innerh">
            <img src="https://cdn-icons-png.flaticon.com/128/3048/3048398.png" alt="exercises" height={35} width={35} />
            <p> Exercises</p>
          </div>
          <div onClick={() => { openDiv('food'); }} title='Healthy Food for your mental health' className="innerh">
            <img src="https://cdn-icons-png.flaticon.com/128/706/706164.png" alt="food" height={35} width={35} />
            <p>Food</p>
          </div>
        </div>
      </div>
      <div className={`hed ${habitsVis ? "" : "hedvis"}`}>
        <span onClick={closeAllDivs} className="hedclose">< FaRegWindowClose /></span>
        <dl>
          <dt><strong>Regular Exercise:</strong></dt>
          <dd>Physical activity has been linked to improved mood and reduced stress. Aim for at least 30 minutes of moderate exercise most days of the week.</dd>
        </dl>
        <dl>
          <dt><strong>Adequate Sleep:</strong></dt>
          <dd>Ensure you get enough quality sleep each night. Lack of sleep can negatively impact mood and cognitive function.</dd>
        </dl>
        <dl>
          <dt><strong>Healthy Diet:</strong></dt>
          <dd>Eat a well-balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Proper nutrition supports both physical and mental well-being.</dd>
        </dl>
        <dl>
          <dt><strong>Mindfulness and Meditation:</strong></dt>
          <dd>Practice mindfulness or meditation to help reduce stress and improve focus. Techniques like deep breathing or guided meditation can be beneficial.</dd>
        </dl>
        <dl>
          <dt><strong>Limit Screen Time:</strong></dt>
          <dd>Be mindful of your screen time, especially on social media. Excessive use can contribute to feelings of anxiety and isolation.</dd>
        </dl>
        <dl>
          <dt><strong>Express Gratitude:</strong></dt>
          <dd>Take time to reflect on the positive aspects of your life. Keeping a gratitude journal can help shift focus to what's going well.</dd>
        </dl>
        <dl>
          <dt><strong>Practice Self-Compassion:</strong></dt>
          <dd>Be kind to yourself. Avoid self-criticism and practice self-compassion. Treat yourself with the same kindness you would offer a friend.</dd>
        </dl>
      </div>
      <div className={`hed1 ${exercisesVis ? "" : "hedvis"}`}>
        <span onClick={closeAllDivs} className="hedclose1">X</span>

        <img src="https://www.matesat.com/wp-content/uploads/2021/05/Exercises-for-mental-health-3.jpg" alt="Exercises" height={500} width={530} />
      </div>
      <div className={`hed2 ${foodVis ? "" : "hedvis"}`}>
        <span onClick={closeAllDivs} className="hedclose2">< FaRegWindowClose /></span>

        <img src="https://healthmatters.nyp.org/wp-content/uploads/2022/07/what-to-eat-for-mental-health-graphic.jpg" alt="Food" height={500} width={530} />
      </div>
    </div>
  );
};

export default Home;
