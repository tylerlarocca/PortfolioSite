import React from "react";
import "./Contact.css";

function Contact() {
  // const initialState = {
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // };

  // const [formData, setFormData] = useState(initialState);

  // function changeHandler({ target: { name, value } }) {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   setFormData(initialState);
  // }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's connect!</h3>
          <p className="contact__details">Send me an email 👋!</p>
        </div>

        <form
          // onSubmit={submitHandler}
          action="https://formsubmit.co/tcltyler@gmail.com"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                // value={formData.name}
                // onChange={changeHandler}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                // value={formData.email}
                // onChange={changeHandler}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              // value={formData.subject}
              // onChange={changeHandler}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message."
              // value={formData.message}
              // onChange={changeHandler}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;