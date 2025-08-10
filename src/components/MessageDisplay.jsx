import { useState } from "react";

export function MessageDisplay({ author, subject, message }) {
  return (
    <div className="message-container">
      <div className="message-item">
        <div className="message-meta">
          <div
            className="message-subject"
            style={{
              backgroundColor:
                subject === "software-issues" ? "red" : "blue",
            }}
          ></div>
          <div className="message-author">{author || "Anonymous"}</div>
        </div>

        <p className="message-content">
          {message || "No message yet..."}
        </p>
      </div>
    </div>
  );
}
