import React from "react";
import Event from "./Event";

function Events() {
  return (
    <section className="events">
      <div className="container">
        <h2>Последние события</h2>
        <Event
          months="Апрель"
          day="14"
          title="Заголовок события"
          time="21:00"
          place="Кгуста"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        />
        <Event
          months="Апрель"
          day="14"
          title="Заголовок события"
          time="21:00"
          place="Кгуста"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        />
        <Event
          months="Апрель"
          day="14"
          title="Заголовок события"
          time="21:00"
          place="Кгуста"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        />
        <Event
          months="Апрель"
          day="14"
          title="Заголовок события"
          time="21:00"
          place="Кгуста"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        />
        <div className="btn-holder">
          <a className="btn blue" href="/#">
            Посмотреть все события
          </a>
        </div>
      </div>
      {/* / container */}
    </section>
  );
}

export default Events;
