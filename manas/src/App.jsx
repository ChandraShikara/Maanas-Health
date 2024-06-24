// // // // import React, { createContext, useState } from 'react';
// // // // import Project from './Project';
// // // // import Student from './Student.jsx';
// // // // import Teacher from './Teacher.jsx';
// // // // import Forgotpassword from './Forgotpassword.jsx';
// // // // import Forgotpassword2 from './Forgotpassword2.jsx';
// // // // import Home from './Home.jsx';
// // // // import { Routes, Route ,BrowserRouter} from 'react-router-dom';

// // // // export const store = createContext();

// // // // const App = () => {
// // // //   const [token, setToken] = useState(null);

// // // //   const App = () => {
// // // //     const [token, setToken] = useState(null);
  
// // // //     return (
// // // //       <BrowserRouter>
// // // //         <store.Provider value={{ token, setToken }}>
// // // //           <div>
// // // //             <Project />
// // // //             <Routes>
// // // //                 <Route path="/forgot-s" element={<Forgotpassword />} />
// // // //                 <Route path="/forgot-t" element={<Forgotpassword2 />} />
// // // //                 <Route path="/tea" element={<Teacher />} />
// // // //                 <Route path="/stu" element={<Student />} />
// // // //                 <Route path="/home" element={<Home />} />
// // // //             </Routes>
// // // //           </div>
// // // //         </store.Provider>
// // // //       </BrowserRouter>
// // // //     );
// // // //   };
// // // // }  

// // // // export default App;

// // // // import React, { createContext, useState } from 'react';
// // // // import Project from './Project';
// // // // import Student from './Student.jsx';
// // // // import Teacher from './Teacher.jsx';
// // // // import Forgotpassword from './Forgotpassword.jsx';
// // // // import Forgotpassword2 from './Forgotpassword2.jsx';
// // // // import Home from './Home.jsx';
// // // // import { Routes, Route, BrowserRouter } from 'react-router-dom';

// // // // export const store = createContext();

// // // // const App = () => {
// // // //   const [token, setToken] = useState(null);

// // // //   return (
// // // //     <BrowserRouter>
// // // //       <store.Provider value={{ token, setToken }}>
// // // //         <div>
// // // //           <Project />
// // // //           <Routes>
// // // //             <Route path="/forgot-s" element={<Forgotpassword />} />
// // // //             <Route path="/forgot-t" element={<Forgotpassword2 />} />
// // // //             <Route path="/tea" element={<Teacher />} />
// // // //             <Route path="/stu" element={<Student />} />
// // // //             <Route path="/home" element={<Home />} />
// // // //           </Routes>
// // // //         </div>
// // // //       </store.Provider>
// // // //     </BrowserRouter>
// // // //   );
// // // // };

// // // // export default App;


// // // // import React, { createContext, useState } from 'react';
// // // // import Project from './Project';
// // // // import Student from './Student.jsx';
// // // // import Teacher from './Teacher.jsx';
// // // // import Forgotpassword from './Forgotpassword.jsx';
// // // // import Forgotpassword2 from './Forgotpassword2.jsx';
// // // // import Home from './Home.jsx';
// // // // import { Routes, Route, BrowserRouter } from 'react-router-dom';

// // // // export const store = createContext();

// // // // const App = () => {
// // // //   const [token, setToken] = useState(null);

// // // //   return (
// // // //     <div>
// // // //     <BrowserRouter>
// // // //       <store.Provider value={{ token, setToken }}>
// // // //           <Project />
// // // //           <Routes>
// // // //             <Route path="/forgot-s" element={<Forgotpassword />} />
// // // //             <Route path="/forgot-t" element={<Forgotpassword2 />} />
// // // //             <Route path="/tea" element={<Teacher />} />
// // // //             <Route path="/stu" element={<Student />} />
// // // //             <Route path="/home" element={<Home />} />
// // // //             <Route path="/" element={<App />} />
// // // //           </Routes>
// // // //       </store.Provider>
// // // //     </BrowserRouter>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;

// // // // App.jsx

// // // // import React, { useState, createContext } from 'react';
// // // // import { useContext } from 'react';

// // // // import Project from './Project';
// // // // import Student from './Student.jsx';
// // // // // import Teacher from './Teacher.jsx';
// // // // import Forgotpassword from './Forgotpassword.jsx';
// // // // import Forgotpassword2 from './Forgotpassword2.jsx';
// // // // import Home from './Home.jsx';
// // // // import { Routes, Route, BrowserRouter } from 'react-router-dom';

// // // // export const store = createContext();

// // // // const App = () => {
// // // //   const { token, setToken } = useContext(store); 

// // // //   return (
// // // //     <div>
// // // //       <store.Provider value={{ token, setToken }}>
// // // //         <BrowserRouter>
// // // //           <Project />
// // // //           <Routes>
// // // //             <Route path="/forgot-s" element={<Forgotpassword />} />
// // // //             <Route path="/forgot-t" element={<Forgotpassword2 />} />
// // // //             {/* <Route path="/tea" element={<Teacher />} /> */}
// // // //             <Route path="/stu" element={<Student />} />
// // // //             <Route path="/home" element={<Home />} />
// // // //             <Route path="/" element={<Project />} />
// // // //           </Routes>
// // // //         </BrowserRouter>
// // // //       </store.Provider>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;

// // // import React from 'react';
// // // import { createContext, useState } from 'react';
// // // import Project from './Project';
// // // import Student from './Student.jsx';
// // // import Forgotpassword from './Forgotpassword.jsx';
// // // import Forgotpassword2 from './Forgotpassword2.jsx';
// // // import Questions from "./Questions.jsx";
// // // import Profile from "./Profile.jsx";
// // // import Contactus from './Contactus.jsx';
// // // import Aboutus from './Aboutus.jsx';
// // // import Home from './Home.jsx';
// // // import { Routes, Route, BrowserRouter } from 'react-router-dom';

// // // export let store = createContext();

// // // const App = () => {
// // //   const [token, settoken]= useState(null) 
// // //   return (
// // //     <div>
// // //       <store.Provider value={[ token, settoken ]}>
// // //         <BrowserRouter>
// // //           <Routes>
// // //             <Route path="/forgot-s" element={<Forgotpassword />} />
// // //             <Route path="/forgot-t" element={<Forgotpassword2 />} />
// // //             <Route path="/stu" element={<Student />} />
// // //             <Route path="/home" element={<Home />} />
// // //             <Route path="/" element={<Project />} />
// // //             <Route path="home/profile" element={<Profile />} />
// // //             <Route path="home/Contact" element={<Contactus />} />
// // //             <Route path="home/about" element={<Aboutus />} />
// // //             <Route path="home/questions" element={<Questions />} />
// // //           </Routes>
// // //         </BrowserRouter>
// // //       </store.Provider>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import React from 'react';
// // import { createContext, useState } from 'react';
// // import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// // import Project from './Project';
// // import Student from './Student.jsx';
// // import Forgotpassword from './Forgotpassword.jsx';
// // import Forgotpassword2 from './Forgotpassword2.jsx'
// // import Questions from "./Questions.jsx";
// // import Profile from "./Profile.jsx";
// // import Contactus from './Contactus.jsx';
// // import Aboutus from './Aboutus.jsx';
// // import Report from './Report.jsx';
// // import Home from './Home.jsx';
// // import THome from './THome.jsx';
// // import Nav from './Nav.jsx';
// // import './Home.css'
// // export let store = createContext();

// // const App = () => {
// //   const [token, setToken] = useState(null);
// //   return (
// //     <div className='app'>
// //       <store.Provider value={[token, setToken]}>
// //         <BrowserRouter>
// //         <Nav/>
// //           <Routes>
// //             <Route path="/forgot-s" element={<Forgotpassword />} />
// //             <Route path="/forgot-t" element={<Forgotpassword2 />} />
// //             <Route path="/stu" element={<Student />} />
// //             <Route
// //               path="/profile"
// //               element={token ? <Profile /> : <Navigate to="/" />}
// //             />
// //             <Route
// //               path="/contact"
// //               element={token ? <Contactus /> : <Navigate to="/" />}
// //             />
// //             <Route
// //               path="/about"
// //               element={token ? <Aboutus /> : <Navigate to="/" />}
// //             />
// //             <Route
// //               path="/questions"
// //               element={token ? <Questions /> : <Navigate to="/" />}
// //             />
// //             <Route
// //               path="/report"
// //               element={token ? <Report /> : <Navigate to="/" />}
// //             />
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/homet" element={<THome />} />
// //             <Route path="/" element={<Project />} />
// //           </Routes>
// //         </BrowserRouter>
// //       </store.Provider>
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react';
// import { createContext, useState} from 'react';
// import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import Project from './Project';
// import Student from './Student.jsx';
// import Forgotpassword from './Forgotpassword.jsx';
// import Forgotpassword2 from './Forgotpassword2.jsx'
// import Questions from "./Questions.jsx";
// import Profile from "./Profile.jsx";
// import Contactus from './Contactus.jsx';
// import Aboutus from './Aboutus.jsx';
// import Report from './Report.jsx';
// import Home from './Home.jsx';
// import THome from './THome.jsx';
// import Nav from './Nav.jsx';
// import TeacherLogin from './TeacherLogin.jsx'
// import StudentLogin from './StudentLogin.jsx';
// import './Home.css';

// export const store = createContext();

// const App = () => {
//   const [tokens, setTokens] = useState({ token: null, token1: null });
//   const { token, token1 } = tokens;
//   // const [token, setToken] = useState(null);
//   // const [token1, setToken1] = useState(null); // Add another state value
//   // console.log(token?"true1":"false1")
//   // console.log(token1?'true2':'false2')

//   return (
//     // <store.Provider value={[tokens, setTokens ]}>
//     // <div className='app'>
     
//     //     <BrowserRouter>
//     //       <Nav />
//     //       <Routes>
//     //         <Route path="/forgot-s" element={<Forgotpassword />} />
//     //         <Route path="/forgot-t" element={<Forgotpassword2 />} />
//     //         <Route path="/stu" element={<Student />} />
//     //         <Route
//     //           path="/profile"
//     //           element={token ? <Profile /> : <Navigate to="/" />}
//     //         />
//     //         <Route
//     //           path="/contact"
//     //           element={token ? <Contactus /> : <Navigate to="/" />}
//     //         />
//     //         <Route
//     //           path="/about"
//     //           element={token ? <Aboutus /> : <Navigate to="/" />}
//     //         />
//     //         <Route
//     //           path="/questions"
//     //           element={token ? <Questions /> : <Navigate to="/" />}
//     //         />
//     //         <Route
//     //           path="/report"
//     //           element={token ? <Report /> : <Navigate to="/" />}
//     //         />
//     //         <Route path="/home" element={<Home />} />
//     //         <Route path="/teacher/home" element={token1 ?<THome />:<Navigate to="/" />}/>
//     //         <Route path="/" element={<Project />} />
//     //         <Route path="/teacherlogin" element={<TeacherLogin />} />
//     //         <Route path="/studentlogin" element={<StudentLogin />} />
//     //       </Routes>
//     //     </BrowserRouter>
//     // </div>
//     // </store.Provider>
//     <store.Provider value={[ tokens, setTokens ]}>
//     <div className="app">
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/forgot-s" element={<Forgotpassword />} />
//           <Route path="/forgot-t" element={<Forgotpassword2 />} />
//           <Route path="/stu" element={<Student />} />
//           <Route
//             path="/profile"
//             element={tokens.token ? <Profile /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/contact"
//             element={tokens.token ? <Contactus /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/about"
//             element={tokens.token ? <Aboutus /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/questions"
//             element={tokens.token ? <Questions /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/report"
//             element={tokens.token ? <Report /> : <Navigate to="/" />}
//           />
//           <Route path="/home" element={<Home />} />
//           <Route path="/teacher/home" element={tokens.token1 ? <THome /> : <Navigate to="/" />} />
//           <Route path="/" element={<Project />} />
//           <Route path="/teacherlogin" element={<TeacherLogin />} />
//           <Route path="/studentlogin" element={<StudentLogin />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   </store.Provider>
//   );
// };

// // export default App;

// import React from 'react';
// import { createContext, useState } from 'react';
// import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import Project from './Project';
// import Student from './Student.jsx';
// import Forgotpassword from './Forgotpassword.jsx';
// import Forgotpassword2 from './Forgotpassword2.jsx';
// import Questions from "./Questions.jsx";
// import Profile from "./Profile.jsx";
// import Contactus from './Contactus.jsx';
// import Aboutus from './Aboutus.jsx';
// import Report from './Report.jsx';
// import Home from './Home.jsx';
// import THome from './THome.jsx';
// import Nav from './Nav.jsx';
// import TeacherLogin from './TeacherLogin.jsx';
// import StudentLogin from './StudentLogin.jsx';
// import './Home.css';

// export const store = createContext();

// const App = () => {
//   // Define tokens state
//   const [tokens, setTokens] = useState({ token: null, token1: null });
//   const {token,token1}=tokens
//   return (
//     <store.Provider value={{tokens, setTokens}}>
      
//       <div>
        
//         <BrowserRouter>
//         <Nav/>
//           <Routes>
//             <Route path="/forgot-s" element={<Forgotpassword />} />
//             <Route path="/forgot-t" element={<Forgotpassword2 />} />
//             <Route path="/stu" element={<Student />} />
//             <Route
//               path="/profile"
//               element={<Profile />}
//             />
//             <Route
//               path="/contact"
//               element={tokens.token ? <Contactus /> : <Navigate to="/" />}
//             />
//             <Route
//               path="/about"
//               element={tokens.token ? <Aboutus /> : <Navigate to="/" />}
//             />
//             <Route
//               path="/questions"
//               element={tokens.token ? <Questions /> : <Navigate to="/" />}
//             />
//             <Route
//               path="/report"
//               element={tokens.token ? <Report /> : <Navigate to="/" />}
//             />
//             <Route path="/home" element={<Home />} />
//             <Route
//               path="/teacher/home"
//               element={tokens.token1 ? <THome /> : <Navigate to="/" />}
//             />
//             <Route path="/" element={<Project />} />
//             <Route path="/teacherlogin" element={<TeacherLogin />} />
//             <Route path="/studentlogin" element={<StudentLogin />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </store.Provider>
//   );
// };

// export default App;



import  React  from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Project from './Project.jsx';
import Student from './Student.jsx';
import Forgotpassword from './Forgotpassword.jsx';
import Questions from "./Questions.jsx";
import Profile from "./Profile.jsx";
import Contactus from './Contactus.jsx';
import Aboutus from './Aboutus.jsx';
import Report from './Report.jsx';
import Aware from './Aware.jsx'
import Home from './Home.jsx';
import THome from './THome.jsx';
import Nav from './Nav.jsx';
import TeacherLogin from './TeacherLogin.jsx';
import StudentLogin from './StudentLogin.jsx';
import Doctors from './Doctors.jsx';
import './Css/home.css'

import ContextState from './ContextState.jsx';
import Reports from './Reports.jsx';

const App = () => {
  return (
    <ContextState>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/forgot-s" element={<Forgotpassword />} />
            <Route path="/stu" element={<Student />} />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/contact"
              element={ <Contactus /> }
            />
            <Route
              path="/about"
              element={<Aboutus /> }
            />
            <Route
              path="/questions"
              element={<Questions />}
            />
            <Route
              path="/report"
              element={ <Report />}
            />
            <Route
              path="/reports"
              element={ <Reports />}
            />
            <Route
              path="/awareness"
              element={<Aware />}
            />
            <Route path="/home" element={<Home />} />
            <Route
              path="/teacherhome"
              element={ <THome /> }
            />
            <Route path="/doctors" element={<Doctors/>} />

            <Route path="/" element={<Project />} />
            <Route path="/teacherlogin" element={<TeacherLogin />} />
            <Route path="/studentlogin" element={<StudentLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
      </ContextState>
  );
};

export default App;
