import React from "react";

function Schedule({ schedule }) {
  return (
    <div className="schedule">
      {Object.keys(schedule).map(stage => (
        <div key={stage}>
          <h2>{stage}</h2>
          {Object.keys(schedule[stage]).map(day => (
            <div key={day}>
              <h3>{day}</h3>
              {schedule[stage][day].map(timeslot => (
                <div key={`${timeslot.start}-${timeslot.end}`}>
                  <span>{timeslot.start}</span> - <span>{timeslot.end}</span>
                  <span>{timeslot.act}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Program({ schedule }) {
  return (
    <div>
      <h1>My Schedule</h1>
      <Schedule schedule={schedule} />
    </div>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/schedule";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      schedule: data,
    },
  };
}
