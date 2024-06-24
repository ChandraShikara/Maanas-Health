// import React from 'react'
// import './Home.css'
// import { FaRegWindowClose } from 'react-icons/fa'
// import { useState } from 'react'
// const Forgotpassword = () => {
//   const [vis,setvis]=useState(false)
//   const open=()=>{
//     setvis(true)
//   }

//   const close=()=>{
//     setvis(false)
//   }
//   return (
//     <div className='fbody'>
//       <div className="forgot">
//         <h2 className='h'>ForgotPassword?</h2>
//         <label htmlFor="femail" className='label1'>
//        <h3>E-mail:</h3>
//         <input className="femail" type="email" placeholder='Enter your registered-email' />
//         </label>
//         <label htmlFor="fotp" className='label2'>
//         <h3>OTP:</h3>
//         <input className='fotp' type="text" placeholder='Enter OTP' />

//         </label>
//         <button className="fbtn" onClick={open}>Reset password!</button>
//       </div>

//       <div className={`resetf ${vis?'':'fvis'}`}>
//       <label htmlFor="createp" className='label3'>
//        <h4>Create New password:</h4>
//         <input className="createp" type="password" placeholder='Create Password' />
//         </label>
//         <label htmlFor="createcp" className='label4'>
//         <h4>Confirm Password:</h4>
//         <input className='createcp' type="password" placeholder='Confirm Password' />

//         </label>
//         <input className="pbtn" type="submit" value="Reset password!"/>
//         <span className="rclose" onClick={close}>< FaRegWindowClose/></span>
//       </div>
//     </div>
//   )
// }

// export default Forgotpassword
import React, { useState } from 'react';
import './Css/home.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
     const[vis,setvis]=useState(false)
    const handleSendOTP = async () => {
            setvis(true)
        try {
            const response = await fetch('http://localhost:3000/sendotpr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            toast(result.message,{ position: toast.POSITION.TOP_CENTER });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            const response = await fetch('http://localhost:3000/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            const result = await response.json();
            toast(result.message,{ position: toast.POSITION.TOP_CENTER });
        } catch (error) {
            console.error('Error:', error);
        }
        setvis(false)
    };

    return (
        <div className='universalh'>
            <div className="forgot">
                <h2>Reset Password</h2>
                <label htmlFor='fem'><p className='fp'>Email:</p></label>
                <input
                    id='fem'
                    className='forgotinp'
                    type="email"
                    value={email}
                    placeholder='Enter your Registered Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="fhdotp" onClick={handleSendOTP}>Send OTP</button>

                <div className={`fgot2 ${vis?'':'secfvis'}`}>
                    <label htmlFor='fotp'><p className='fp1'>OTP:</p></label>
                    <input
                        id='fotp'
                        className='forgotinp'
                        type="text"
                        value={otp}
                        placeholder='Enter the OTP'
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <label htmlFor='fps'><p className='fp2'>New Password:</p></label>
                    <input
                        id='fps'
                        className='forgotinp'
                        type="password"
                        value={newPassword}
                        placeholder='Create New Password'
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <button className='fbtn' onClick={handleResetPassword}>Reset Password</button>
                </div>
            </div>
        </div>
    );
};

export default Forgotpassword;

