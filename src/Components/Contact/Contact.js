// // ContactForm.js
// import React, { useState } from 'react';
// import './Contact.css'; // Import the external CSS file
// import logo from './back5.jpg'
// function ContactForm() {
  
//   return (
//     // <div className='back'>
        
//     // <div className="container">
//     //   <h2>Contact Us</h2>
//     //   <form onSubmit={handleSubmit} className="form">
//     //     <label htmlFor="name">Name:</label>
//     //     <input
//     //       type="text"
//     //       id="name"
//     //       name="name"
//     //       value={formData.name}
//     //       onChange={handleChange}
//     //       required
//     //     />

//     //     <label htmlFor="email">Email:</label>
//     //     <input
//     //       type="email"
//     //       id="email"
//     //       name="email"
//     //       value={formData.email}
//     //       onChange={handleChange}
//     //       required
//     //     />

//     //     <label htmlFor="message">Message:</label>
//     //     <textarea
//     //       id="message"
//     //       name="message"
//     //       value={formData.message}
//     //       onChange={handleChange}
//     //       required
//     //     ></textarea>

//     //     <button type="submit">Submit</button>
//     //   </form>
//     // </div>
//     // </div>
//     <section class="contact" id="contact">
//         <h1 class="heading"><span>Contact</span> me</h1>

//         <div class="row">
//             <div class="content">
//                 <h3 class="title">Contact Info</h3>

//                 <div class="info">
//                     <h3><i class="fa-solid fa-envelope"></i> apurvashimpi23@gmail.com</h3>
//                     <h3><i class="fa-solid fa-phone"></i> +918626033071</h3>
//                     <h3><i class="fa-solid fa-location-dot"></i> Nashik,Maharashtra</h3>

//                 </div>
//             </div>
//             <form>
//                 <input type="text" id="name" placeholder="Name" class="box">
//                 <input type="text" id="email" placeholder="Email" class="box">
//                 <input type="text" id="project" placeholder="Project" class="box">
//                 <textarea name="" id="message" cols="30" rows="10" class="box message" placeholder="Message"></textarea>
//                 <button type="submit" class="btn" onclick="sendEmail()">Send To</button>

//             </form>
//         </div>
//       </section>
//   );
// };

// export default ContactForm;
// ContactForm.js

import React from 'react';
import './Contact.css'; // Import the external CSS file
// import logo from './back5.jpg';
 import Button from '@mui/material/Button';

function ContactForm() {
  return (
    <section className="contact" id="contact">
      {/* <h1 className="heading1">
        <span>Contact</span> me
      </h1> */}

      <div className="row">
        <div className="content">
          <h3 className="title">Contact Info</h3>

          <div className="info">
            <h3>
              <i className="fas fa-envelope"></i> apurvashimpi23@gmail.com
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +91 9096260971
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +91 9595779771
            </h3>
            <h3>
              <i className="fas fa-location-dot"></i> Parola, Maharashtra
            </h3>
          </div>
        </div>
        <form>
          <input type="text" id="name" placeholder="Name" className="box" />
          <input type="text" id="email" placeholder="Email" className="box" />
          <input type="text" id="project" placeholder="Project" className="box" />
          <textarea
            name=""
            id="message"
            cols="10"
            rows="8"
            className="box message"
            placeholder="Message"
          ></textarea>
          {/* <button type="button" class="btn btn-primary">Send Email</button> */}
          <Button variant="contained" className='email-btn'>Send Email</Button>
          {/* <button variant="conatined" className="btn">
            Send Email
          </button> */}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
