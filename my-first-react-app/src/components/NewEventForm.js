import "./NewEventForm.css";
import React from "react";
import { useState } from "react";

const NewEventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  return (
    <form className="new-event-from">
      <label>
        <span>Event title:</span>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <span>Event date:</span>
        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </label>
      <button type="submit">Create event</button>
      <p>Title - {title}</p>
      <p>Date - {date}</p>
      <button type="button" onClick={resetForm}>
        Reset the form
      </button>
    </form>
  );
};

export default NewEventForm;
