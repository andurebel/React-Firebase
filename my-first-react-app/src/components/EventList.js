import React from "react";

const EventList = ({ events, setEvents, handleClick }) => {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EventList;
