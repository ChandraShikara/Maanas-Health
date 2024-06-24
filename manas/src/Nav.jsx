// // import React from 'react'
// // import "./App.css";
// // import './Home.css'
// // import { NavLink } from 'react-router-dom';
// // const Nav = () => {
// //   return (
// //     <div className='nav'>
// //       <h3>Manas Health</h3>
// //       <ul className='ul'>
// //         <div className="innerdiv">
// //       <NavLink className='vis' to="/profile">  <li className='li'>Profile</li></NavLink>
// //        <NavLink className='vis' to="/home"> <li className='li'>Home</li></NavLink>
// //        <NavLink className='vis' to="/about"> <li className='li'>About Us</li></NavLink>
// //         <NavLink className='vis' to="/contact"><li className='li'>Contact Us</li></NavLink>
// //         <NavLink className='vis' to="/questions"><li className='li'>Take test</li></NavLink>
// //         </div>
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Nav

// // Nav.jsx
// import React from 'react';
// import { NavLink, useLocation,Link } from 'react-router-dom';
// import './index.css'
// import './Nav.css'; // Import your navbar styles


// const Nav = () => {
//   const location = useLocation();

//   const stickyNavbarRoutes = ['/about']; // Add the routes where navbar should be sticky

//   // Check if the current route is in the list of routes for a sticky navbar
//   const isStickyNavbar = stickyNavbarRoutes.includes(location.pathname);

//   // List of routes where the navbar should be hidden
//   const hideNavbarRoutes = ['/teacher/home','/studentlogin','/teacherlogin','/','/stu'];

//   // Check if the current route is in the list of routes to hide the navbar
//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   if (shouldHideNavbar) {
//     return null; // Return null to hide the navbar
//   }

//   return (
//     <div className={`nav ${isStickyNavbar ? 'sticky' : ''}`}>
//       <Link to='/home'><h3>Manas Health</h3></Link>
//       <ul className='ul'>
//         <div className="innerdiv">
//           <NavLink className='vis' to="/profile">
//             <li className='li'>Profile</li>
//           </NavLink>
//           <NavLink className='vis' to="/home">
//             <li className='li'>Home</li>
//           </NavLink>
//           <NavLink className='vis' to="/about">
//             <li className='li'>About Us</li>
//           </NavLink>
//           <NavLink className='vis' to="/contact">
//             <li className='li'>Contact Us</li>
//           </NavLink>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Nav;

import React from 'react';
import { NavLink, useLocation,Link } from 'react-router-dom';
import './Css/home.css'
import './Css/index.css'
import './Css/Nav.css'

const Nav = () => {
  const location = useLocation();

  // const stickyNavbarRoutes = ['/about']; // Add the routes where navbar should be sticky

  // Check if the current route is in the list of routes for a sticky navbar
  // const isStickyNavbar = stickyNavbarRoutes.includes(location.pathname);

  // List of routes where the navbar should be hidden
  const hideNavbarRoutes = ['/teacherhome','/studentlogin','/teacherlogin','/','/stu','/reports'];

  // Check if the current route is in the list of routes to hide the navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (shouldHideNavbar) {
    return null; // Return null to hide the navbar
  }

  return (
    <div className={`nav `}>
      <Link to='/home'><h3>Manas Health</h3></Link>
      <ul className='ul'>
        <div className="innerdiv">
          <NavLink className='vis' to="/profile">
            <li className='li'>Profile</li>
          </NavLink>
          <NavLink className='vis' to="/home">
            <li className='li'>Home</li>
          </NavLink>
          <NavLink className='vis' to="/about">
            <li className='li'>About Us</li>
          </NavLink>
          <NavLink className='vis' to="/contact">
            <li className='li'>Contact Us</li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
