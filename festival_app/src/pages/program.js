import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Program({ schedule }) {
  const [selectedStage, setSelectedStage] = useState(null);

  function handleStageClick(stage) {
    setSelectedStage(stage);
  }
  return (
    <div>
      <Navbar />
      <div>
        <h1>Program</h1>
        <Filterbuttons schedule={schedule} onClick={handleStageClick} />
        <Schedule schedule={schedule} selectedStage={selectedStage} />
      </div>
    </div>
  );
}

function Filterbuttons({ schedule, onClick }) {
  return (
    <div className="w-screen">
      <Button onClick={() => onClick("")}>All</Button>
      {Object.keys(schedule).map(stage => (
        <Button key={stage} onClick={() => onClick(stage)}>
          {stage}
        </Button>
      ))}
    </div>
  );
}

function Schedule({ schedule, selectedStage }) {
  $;
  return (
    <div className="schedule">
      {Object.keys(schedule)
        .filter(stage => !selectedStage || stage === selectedStage)
        .map(stage => (
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
