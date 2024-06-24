import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaLock, FaEnvelope, FaPhoneAlt, FaEye, FaEyeSlash ,FaRegWindowClose} from 'react-icons/fa';

const Teacher = () => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherPassword, setTeacherPassword] = useState('');
  const [teacherCPassword, setTeacherCPassword] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherMobile, setTeacherMobile] = useState('');
  const [teacherPasswordError, setTeacherPasswordError] = useState('');
  const [teacherCPasswordError, setTeacherCPasswordError] = useState('');
  const [teacherEmailError, setTeacherEmailError] = useState('');
  const [teacherMobileError, setTeacherMobileError] = useState('');
  const [showTeacherPassword, setShowTeacherPassword] = useState(false);

  const teacherDetails = {
    teacherName,
    teacherPassword,
    teacherCPassword,
    teacherEmail,
    teacherMobile,
  };

  const submitTeacherForm = (e) => {
    e.preventDefault();

    // Reset previous errors
    setTeacherPasswordError('');
    setTeacherCPasswordError('');
    setTeacherEmailError('');
    setTeacherMobileError('');

    // Validation logic
    if (
      teacherName === '' ||
      teacherPassword === '' ||
      teacherCPassword === '' ||
      teacherEmail === '' ||
      teacherMobile === ''
    ) {
      alert('Input fields should not be empty.');
    } else {
      // Password validation
      if (teacherPassword.length < 8 || teacherPassword.length > 16) {
        setTeacherPasswordError('Password must be between 8 and 16 characters.');
      } else if (!isPasswordValid(teacherPassword)) {
        setTeacherPasswordError(
          'Password must contain 1 special character, 1 digit, 1 uppercase.'
        );
      }

      // Confirm Password validation
      if (teacherCPassword !== teacherPassword) {
        setTeacherCPasswordError('Passwords do not match.');
      }

      // Email validation
      if (!isEmailValid(teacherEmail)) {
        setTeacherEmailError('Enter a valid email address.');
      }

      // Mobile validation
      if (teacherMobile.length !== 10) {
        setTeacherMobileError('Enter a valid 10-digit mobile number.');
      }
    }

    console.log(teacherDetails);
  };

  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+[\]{};:'"<>,.?~\\-]/;
    const hasSpecialCharacter = specialCharacters.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasSpecialCharacter && hasUppercase && hasDigit;
  };

  const isEmailValid = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const resetTeacherErrors = () => {
    setTeacherPasswordError('');
    setTeacherCPasswordError('');
    setTeacherEmailError('');
    setTeacherMobileError('');
  };

  const toggleTeacherPasswordVisibility = () => {
    setShowTeacherPassword(!showTeacherPassword);
  };

  return (
    <div>
      <div className="full1">
        <form onSubmit={submitTeacherForm} noValidate={true}>
          <p className="h2">Teacher Sign-Up</p>
          <div className="bb" id="b1">
            <label htmlFor="tnam1">Teacher Name:</label>
            <input
              type="text"
              className="aa"
              id="tnam1"
              placeholder="Teacher Name"
              onChange={(e) => setTeacherName(e.target.value)}
            />
            <span className="icon">
              <FaUserCircle />
            </span>
          </div>
          <div className="bb" id="b3">
            <label htmlFor="tpassword1">Password:</label>
            <input
              type={showTeacherPassword ? 'text' : 'password'}
              className="aa"
              id="tpassword1"
              placeholder="Create Password"
              onChange={(e) => setTeacherPassword(e.target.value)}
            />
            <span id="eye3" onClick={toggleTeacherPasswordVisibility}>
              {showTeacherPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <br />
            <span className="error">{teacherPasswordError}</span>
          </div>
          <div className="bb" id="b4">
            <label htmlFor="tcon-password">Confirm Password:</label>
            <input
              type="password"
              className="aa"
              id="tcon-password"
              placeholder="Confirm password"
              onChange={(e) => setTeacherCPassword(e.target.value)}
            />
            <span className="icon">
              <FaLock />
            </span>
            <br />
            <span className="error">{teacherCPasswordError}</span>
          </div>
          <div className="bb" id="b5">
            <label htmlFor="te-mail">E-Mail:</label>
            <input
              type="email"
              className="aa"
              id="te-mail"
              placeholder="College/School E-mail"
              onChange={(e) => setTeacherEmail(e.target.value)}
            />
            <span className="icon">
              <FaEnvelope />
            </span>
            <br />
            <span className="error">{teacherEmailError}</span>
          </div>
          <div className="bb" id="b6">
            <label htmlFor="tmobile">Mobile Number:</label>
            <input
              type="tel"
              className="aa"
              id="tmobile"
              placeholder="Mobile number"
              onChange={(e) => setTeacherMobile(e.target.value)}
            />
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <br />
            <span className="error">{teacherMobileError}</span>
          </div>
          <br />
          <input className="hh" id="tsubmit" type="submit" value="SUBMIT" />
          <input
            className="hh"
            id="reset1"
            type="reset"
            value="RESET"
            onClick={resetTeacherErrors}
          />
          <Link to="/">
          <span className="close2">< FaRegWindowClose/></span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Teacher;


// import React, { useState } from 'react';
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { FaUserCircle, FaLock, FaEnvelope, FaPhoneAlt, FaEye, FaEyeSlash, FaRegWindowClose } from 'react-icons/fa';

// const Teacher = () => {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [cpassword, setCPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [cpasswordError, setCPasswordError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [mobileError, setMobileError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const details = { username, password, cpassword, email, mobile };

//   const submitTeacherForm = async (e) => {
//     e.preventDefault();

//     // Reset previous errors
//     setPasswordError('');
//     setCPasswordError('');
//     setEmailError('');
//     setMobileError('');

//     // Validation logic
//     let isValid = true;

//     if (username === '' || password === '' || cpassword === '' || email === '' || mobile === '') {
//       alert('Input fields should not be empty.');
//       isValid = false;
//     } else {
//       // Password validation
//       if (password.length < 8 || password.length > 16) {
//         setPasswordError('Password must be between 8 and 16 characters.');
//         isValid = false;
//       } else if (!isPasswordValid(password)) {
//         setPasswordError('Password must contain 1 special character, 1 digit, 1 uppercase.');
//         isValid = false;
//       }

//       // Confirm Password validation
//       if (cpassword !== password) {
//         setCPasswordError('Passwords do not match.');
//         isValid = false;
//       }

//       // Email validation
//       if (!isEmailValid(email)) {
//         setEmailError('Enter a valid email address.');
//         isValid = false;
//       }

//       // Mobile validation
//       if (mobile.length !== 10) {
//         setMobileError('Enter a valid 10-digit mobile number.');
//         isValid = false;
//       }
//     }

//     if (isValid) {
//       console.log(details);
//       axios.post('http://localhost:5000/teacher-register', details)
//       .then(
//         res=>{
//           if(res.data==="Exist"){
//            return alert("User already exists")
//           }
//           if(res.data==="E-Exist"){
//             return alert("Email already exists")
//            }
//            if(res.data==="M-Exist"){
//             return alert("Mobile already exists")
//            }
//            if(res.data==="Done"){
//             alert("Regstartion Succesfull!\nYou can now login")
//            }
//         }
//         )
//         .catch(error => console.error("Error:", error));
//     }
//   };

//   const isPasswordValid = (password) => {
//     const specialCharacters = /[!@#$%^&*()_+[\]{};:'"<>,.?~\\-]/
//     const hasSpecialCharacter = specialCharacters.test(password)
//     const hasUppercase = /[A-Z]/.test(password)
//     const hasDigit = /\d/.test(password)

//     return hasSpecialCharacter && hasUppercase && hasDigit
//   }

//   const isEmailValid = (email) => {
//     return email.includes('@') && email.includes('.')
//   }

//   const resetTeacherErrors = () => {
//     setPasswordError('');
//     setCPasswordError('');
//     setEmailError('');
//     setMobileError('');
//   }

//   const toggleTeacherPasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <div className='stubody'>
//       <div className="full">
//         <form onSubmit={submitTeacherForm} noValidate={true}>
//           <p className="h2">Teacher Sign-Up</p>
//           <div className="bb" id="b1">
//             <label htmlFor="tnam1">Teacher Name:</label>
//             <input
//               type="text"
//               className="aa"
//               id="tnam1"
//               placeholder="Teacher Name"
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <span className="icon">
//               <FaUserCircle />
//             </span>
//           </div>
//           <div className="bb" id="b3">
//             <label htmlFor="tpassword1">Password:</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               className="aa"
//               id="tpassword1"
//               placeholder="Create Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span id="eye3" onClick={toggleTeacherPasswordVisibility}>
//               {showPassword ? <FaEye /> : <FaEyeSlash />}
//             </span>
//             <br />
//             <span className="error">{passwordError}</span>
//           </div>
//           <div className="bb" id="b4">
//             <label htmlFor="tcon-password">Confirm Password:</label>
//             <input
//               type="password"
//               className="aa"
//               id="tcon-password"
//               placeholder="Confirm password"
//               onChange={(e) => setCPassword(e.target.value)}
//             />
//             <span className="icon">
//               <FaLock />
//             </span>
//             <br />
//             <span className="error">{cpasswordError}</span>
//           </div>
//           <div className="bb" id="b5">
//             <label htmlFor="te-mail">E-Mail:</label>
//             <input
//               type="email"
//               className="aa"
//               id="te-mail"
//               placeholder="College/School E-mail"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span className="icon">
//               <FaEnvelope />
//             </span>
//             <br />
//             <span className="error">{emailError}</span>
//           </div>
//           <div className="bb" id="b6">
//             <label htmlFor="tmobile">Mobile Number:</label>
//             <input
//               type="tel"
//               className="aa"
//               id="tmobile"
//               placeholder="Mobile number"
//               onChange={(e) => setMobile(e.target.value)}
//             />
//             <span className="icon">
//               <FaPhoneAlt />
//             </span>
//             <br />
//             <span className="error">{mobileError}</span>
//           </div>
//           <br />
//           <input className="hh" id="tsubmit" type="submit" value="SUBMIT" />
//           <input
//             className="hh"
//             id="reset1"
//             type="reset"
//             value="RESET"
//             onClick={resetTeacherErrors}
//           />
//           <Link to="/">
//             <span className="close2"><FaRegWindowClose /></span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Teacher;
