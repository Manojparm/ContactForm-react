import React, { useState } from 'react'
import Button from '../components/Button/Button'
import styles from './Contact.module.css';

const ContactForm = () => {
    
    const formSubmit=(event)=>{
      event.preventDefault();
      console.log(event.target[0].value);
    
    
    }

  return (
    <section className={styles.container}>
     <div className={styles.contact_form}> 
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT"/>
      <Button  text="VIA CALL"/>
      </div>
      <Button text="VIA EMAIL FORM" isOutline={true}/>
      
      <form onSubmit={formSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
         <textarea name="text" rows="8"></textarea>
        </div>
        
        <div style={{
          display:"flex",
          justifyContent:"end"
        }}>
        <Button text="SUBMIT BUTTON"/>
    
        </div>
      </form>
       
     </div>
     <div className={styles.contact_image}>
      <img src="images/contactimage.jpg" alt="" />
     </div>
    </section>
  )
}

export default ContactForm
