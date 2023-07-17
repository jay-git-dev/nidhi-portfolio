import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import emailjs from '@emailjs/browser'
// import { themeContext } from "../../Context";
const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
//when anyone send any message to me i get it on my email

    emailjs
      .sendForm(
        "service_frvnram",
        "template_senhcdx",
        form.current,
        "tUYgA5uEBSOnZZkxp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        form.current.reset();
        },
        (error) => {
          console.log(error.text)
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span >Get in Touch</span>
          <br/>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;