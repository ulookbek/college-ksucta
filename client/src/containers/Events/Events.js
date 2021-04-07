import Event from "../../components/Events/Event";

function Events() {
  return (
    <>
      <div className="divider"></div>
      <div className="container">
        <section className="posts-con">
          <h1>События:</h1>
          <Event
            detail
            months="Апрель"
            day="14"
            title="Заголовок события"
            time="21:00"
            place="Кгуста"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
          />
        </section>
      </div>
    </>
  );
}

export default Events;
