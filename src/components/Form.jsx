import { useState } from "react";
import { MessageDisplay } from "./MessageDisplay";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "hardware",
    message: "",
    contactMethod: "",
    termsAccepted: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrorMessage(""); 
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.termsAccepted) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }
    if (!formData.contactMethod) {
      setErrorMessage("Please select a preferred contact method.");
      return;
    }


    console.log({
      fullName: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      contactMethod: formData.contactMethod,
      termsAccepted: formData.termsAccepted,
    });

    setErrorMessage("");
  }

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="fullname-input">What is your full name?</label>
          <input
            type="text"
            id="fullname-input"
            name="fullName"
            placeholder="First name Last name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email-input">Enter your email address</label>
          <input
            type="text"
            id="email-input"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="subject-dropdown">Select the topic of your message</label>
          <select
            id="subject-dropdown"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="message">Write a message</label>
          <textarea
            id="message"
            name="message"
            placeholder="A detailed description of your problem"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="char-counter">{formData.message.length} characters</div>
        </div>

        <div className="radio-wrapper">
          <p>Preferred contact method:</p>

          <div>
            <input
              type="radio"
              id="email-radio"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === "email"}
              onChange={handleChange}
            />
            <label htmlFor="email-radio">Email</label>
          </div>

          <div>
            <input
              type="radio"
              id="phone-radio"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === "phone"}
              onChange={handleChange}
            />
            <label htmlFor="phone-radio">Phone</label>
          </div>

          <div>
            <input
              type="radio"
              id="no-preference-radio"
              name="contactMethod"
              value="no-preference"
              checked={formData.contactMethod === "no-preference"}
              onChange={handleChange}
            />
            <label htmlFor="no-preference-radio">No Preference</label>
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />{" "}
            I agree to the terms and conditions
          </label>
        </div>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button type="submit">Submit</button>
      </form>

      <MessageDisplay
        author={formData.fullName}
        subject={formData.subject}
        message={formData.message}
      />
    </div>
  );
}
