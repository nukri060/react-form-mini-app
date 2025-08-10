import { useState } from "react";
import { MessageDisplay } from "./MessageDisplay";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("subject-option");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      fullName,
      email,
      subject,
      message,
    });
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email-input">Enter your email address</label>
          <input
            type="text"
            id="email-input"
            name="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="subject-dropdown">
            Select the topic of your message
          </label>
          <select
            id="subject-dropdown"
            name="subjects"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="subject-option">Hardware</option>
            <option value="software-issues">Software</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="message">Write a message</label>
          <textarea
            id="message"
            name="message"
            placeholder="A detailed description of your problem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="char-counter">{message.length} characters</div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <MessageDisplay
        author={fullName}
        subject={subject}
        message={message}
      />
    </div>
  );
}
