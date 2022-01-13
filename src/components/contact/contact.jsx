import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lfu0nl4",
        "template_8pc0vgr",
        formRef.current,
        "user_uHPKDLtD0TS1uVjEcxv4r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (+66) 085 055 7253
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              Nathapot.po@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              194/2 Nonsi Rd. Chongnonsi Yannawa Bangkok 10120
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>If you'd like to hire me, </b>
            please send me an email with information about your project.
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button>Submit</button>
            {done && (
              <div className="d-success">Thank you for your information🎉</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
