// src/Form.js
import { useRef } from 'react';
import './form.css'
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

export default function Form({aosStlye}) {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted!2', formRef);
       
        // const myForm = event.target;
        // const formData = new FormData(myForm);
        // Get form data
        // const formData = new FormData(formRef.current);
        emailjs
        .sendForm('service_9gm9lba', 'template_3de1jw9', formRef.current, 'user_wv3K1hQDxcdMl9VBIJNVm')
        // })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => console.log('FAILED...', error.text),
        );
        
        // fetch("/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   body: new URLSearchParams(formData).toString(),
        // })
        //   .then(() => console.log("Form successfully submitted"))
        //   .catch((error) => alert(error));
      };
      
    //   document
    //     .querySelector("form")
    //     .addEventListener("submit", handleSubmit);
      
  return (  
  //   <form ref={form} onSubmit={handleSubmit}>
  //   <label>Name</label>
  //   <input type="text" name="user_name" />
  //   <label>Email</label>
  //   <input type="email" name="user_email" />
  //   <label>Message</label>
  //   <textarea name="message" />
  //   <input type="submit" value="Send" />
  // </form>
    <form 
      onSubmit={handleSubmit}
      className='contactForm'
      ref={formRef}
      data-aos={aosStlye} 
     
      >

      <input 
        type='text' 
        name='user_name' 
        placeholder='Enter your name..' />

      <input 
        type='email' 
        name='user_email' 
        placeholder='Enter your email..' />

        <input type = 'phone' name='user_phone' placeholder='Enter digits..' />

      <textarea 
        name='message' 
        placeholder='Messaage..'></textarea>

      <input type='file' name='file'  disabled/>
      <button type='submit' className='btn modal-submit-button'>Submit</button>

    </form>
  )
}