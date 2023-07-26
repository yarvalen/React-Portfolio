

// import React from 'react';

// const Contact = () => {
//     return (
//         <div class='flex flex-col'>
//             {/* <h2>Contact Form</h2> */}
//             <p>Thank you for your interest in contacting me.  If you would like to speak to me or contact me please reach out to me using any of the following channels below.</p>
//             <ul>
//                 <li>
//                     <a className='link link-primary' href=''>LinkedIn</a>
//                 </li>
//                 <li>
//                     <a className='link link-secondary' href=''>GitHub</a>
//                 </li>
//                 <li>
//                     <a className='link link-accent' href='mailto:janevalen00@gmail.com'>Email</a>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col'>
      {/* <h2>Contact Form</h2> */}
      <p>I appreciate your interest in getting in touch with me. If you have any questions or would like to connect, feel free to reach out using any of the contact channels listed below.</p>
      <ul>
        <li>
          <a className='link link-primary' href=''>LinkedIn</a>
        </li>
        <li>
          <a className='link link-secondary' href=''>GitHub</a>
        </li>
        <li>
          <a className='link link-accent' href='mailto:janevalen00@gmail.com'>Email</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
