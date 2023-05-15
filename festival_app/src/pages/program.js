import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function Program({ schedule, bands }) {
  console.log(schedule);
  console.log(bands);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  function handleStageClick(stage) {
    setSelectedStage(stage);
  }

  function handleDayClick(day) {
    setSelectedDay(day);
    console.log(day);
  }

  // useEffect(() => {
  //   const logoUrl = bandData.logo.startsWith("https://") ? bandData.logo : `https://scratched-bronze-lingonberry.glitch.me/logos/${bandData.logo}`;
  // }, []);

  return (
    <div>
      <h1>Program</h1>
      <FilterbuttonsStage schedule={schedule} onClick={handleStageClick} />
      <FilterbuttonsDay schedule={schedule} onClick={handleDayClick} />
      <Schedule schedule={schedule} bands={bands} selectedStage={selectedStage} selectedDay={selectedDay} />
    </div>
  );
}

function FilterbuttonsStage({ schedule, onClick }) {
  return (
    <div className="w-screen">
      <Button onClick={() => onClick("")}>All</Button>
      {Object.keys(schedule).map((stage) => (
        <Button key={stage} onClick={() => onClick(stage)}>
          {stage}
        </Button>
      ))}
    </div>
  );
}

function FilterbuttonsDay({ schedule, onClick }) {
  const days = new Set();

  Object.keys(schedule).map((stage) => {
    Object.keys(schedule[stage]).map((day) => {
      days.add(day);
    });
  });

  return (
    <div className="w-screen">
      <Button onClick={() => onClick("")}>All</Button>
      {[...days].map((day) => (
        <Button key={day} onClick={() => onClick(day)}>
          {day}
        </Button>
      ))}
    </div>
  );
}

function Schedule({ schedule, bands, selectedStage, selectedDay }) {
  // A const, that runs through the bands and matches it witht he act to get their image. Add "style={{backgroundImage}}" and we should have i running. Maybe, it will only show one image, not sure.
  const backgroundImage = (name) => {
    console.log(name);
    console.log("bands", bands);
    for (let i = 0; i < bands.length; i++) {
      if (name === bands[i].name) {
        return bands[i].logo.startsWith("https://") ? `url("${bands[i].logo}"` : `url("https://scratched-bronze-lingonberry.glitch.me/logos/${bands[i].logo}")`;
      }
    }
  };
  return (
    <div className="schedule">
      {/* Denne function gør at vi kan filtrere på hvilke scener der skal vises */}
      {Object.keys(schedule)
        .filter((stage) => !selectedStage || stage === selectedStage)
        .map((stage) => (
          <div key={stage}>
            <h2>{stage}</h2>
            {/* Denne function gør at vi kan filtrere på hvilken dag der skal vises program for */}
            {Object.keys(schedule[stage])
              .filter((day) => !selectedDay || day === selectedDay)
              .map((day) => (
                <div key={day}>
                  <h3>{day}</h3>
                  <div className="bandList grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {schedule[stage][day].map((timeslot) => (
                      <div key={`${timeslot.start}-${timeslot.end}`} className="grid grid-cols-2" style={{ backgroundImage: backgroundImage(timeslot.act) }}>
                        <span>
                          {timeslot.start} - {timeslot.end}
                        </span>
                        <span>{timeslot.act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

// export async function getServerSideProps() {
//   const api = "http://localhost:8080/schedule";
//   const res = await fetch(api);
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       schedule: data,
//     },
//   };
// }

export async function getServerSideProps() {
  // const band = context.params.band;

  // Fetch post data from API using the ID parameter

  const [res1, res2, res3] = await Promise.all([fetch(`http://localhost:8080/bands`), fetch(`http://localhost:8080/schedule`), fetch(`http://localhost:8080/events`)]);

  const bands = await res1.json();
  const schedule = await res2.json();
  const event = await res3.json();

  // Pass the post data as props to the page
  return {
    props: {
      bands,
      schedule,
      event,
    },
  };
}