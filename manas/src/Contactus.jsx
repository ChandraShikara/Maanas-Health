// // import React from 'react'
// // import './Home.css'
// // const Contactus = () => {
// //   return (
// //     <div className='universal'>
// //       contactus
// //     </div>
// //   )
// // }

// // export default Contactus
// // ContactForm.jsx

// import React, { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form fields
//     const { name, email, message } = formData;

//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//       toast.error('Please fill in all fields before submitting the form.');
//       return;
//     }

//     try {
//       const response = await fetch('https://formsubmit.co/mhproject19@gmail.com', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams(formData).toString(),
//       });

//       if (response.ok) {
//         // Form submitted successfully
//         toast.success('Form Submitted! and You will recieve the response from us to Your Email!',{ position: toast.POSITION.TOP_CENTER });

//         // Clear form inputs
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       } else {
//         toast.error('Form submission failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className=' contact'>
//       <>
//       <h1 className='headingcontact'>
//         <svg
//           className="cicon"
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//           // className="bi bi-person-lines-fill"
//           viewBox="0 0 16 16"
//         >
//           <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
//         </svg>{' '}
//         Get In Touch With Us!
//       </h1>

//       <form className='cform' onSubmit={handleSubmit}>
//         <input
//         className='cinput'
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//         className='cinput'
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//         className='ctextarea'
//           id="message"
//           name="message"
//           placeholder="Your message here"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea>
//         <button className='cbutton' type="submit">Send</button>
//       </form>
//     </>
//     </div>
//   );
// };

// export default Contactus;
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const { name, email, message } = formData;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('Please fill in all fields before submitting the form.');
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/22bd1a057l@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Form submitted successfully
        toast.success('Form Submitted! You will receive a response from us to your Email!', { position: toast.POSITION.TOP_CENTER });

        // Clear form inputs
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Form submission failed
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        toast.error('Form submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className='contact'>
      <h1 className='headingcontact'>
        <svg
          className="cicon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
        </svg>{' '}
        Get In Touch With Us!
      </h1>

      <form className='cform' onSubmit={handleSubmit}>
        <input
          className='cinput'
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='cinput'
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='ctextarea'
          id="message"
          name="message"
          placeholder="Your message here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className='cbutton' type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contactus;
