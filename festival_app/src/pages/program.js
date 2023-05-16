import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function Program({ schedule }) {
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedAct, setSelectedAct] = useState(null);

  function handleStageClick(stage) {
    setSelectedStage(stage);
  }

  function handleDayClick(day) {
    setSelectedDay(day);
    console.log(day);
  }

  function handleChange(e) {
      setSelectedAct(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Program</h1>
      <TextField onChange={handleChange}></TextField>
      <FilterbuttonsStage schedule={schedule} onClick={handleStageClick} />
      <FilterbuttonsDay schedule={schedule} onClick={handleDayClick} />
      <Schedule schedule={schedule} selectedStage={selectedStage} selectedDay={selectedDay} selectedAct={selectedAct} />
    </div>
  );
}

function FilterbuttonsStage({ schedule, onClick }) {
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

function FilterbuttonsDay({ schedule, onClick }) {
  const days = new Set();

  Object.keys(schedule).map(stage => {
    Object.keys(schedule[stage]).map(day => {
      days.add(day);
    });
  });

  return (
    <div className="w-screen">
      <Button onClick={() => onClick("")}>All</Button>
      {[...days].map(day => (
        <Button key={day} onClick={() => onClick(day)}>
          {day}
        </Button>
      ))}
    </div>
  );
}

function Schedule({ schedule, selectedStage, selectedDay, selectedAct }) {

  return (
    <div className="schedule">
      {/* Denne function gør at vi kan filtrere på hvilke scener der skal vises */}
      {Object.keys(schedule)
        .filter(stage => !selectedStage || stage === selectedStage)
        .map(stage => (
          <div key={stage}>
            <h2>{stage}</h2>
            <ObjectDay
              schedule={schedule}
              stage={...schedule[stage]}
              selectedDay={selectedDay}
              selectedAct={selectedAct}
            />
          </div>
        ))}
    </div>
  );
}

function ObjectDay({schedule, stage, selectedDay, selectedAct }) {


  {
    /* Denne function gør at vi kan filtrere på hvilken dag der skal vises program for */
  }
  return Object.keys(stage)
    .filter(day => !selectedDay || day === selectedDay)
    .map(day => (
      <div key={day}>
        <h3>{day}</h3>
        <ObjectBand days={...stage[day]} selectedAct={selectedAct} />
      </div>
    ));
}

function ObjectBand({ days, selectedAct }) {
  console.log(Object.values(days))
  return Object.values(days).filter(band => !selectedAct || `${band.act.toLowerCase()}`.includes(selectedAct)).map(band => (<div key={`${band.start}-${band.end}`}>
  <span>{band.act}</span>
</div>))

/*   return days.map(band => (
      <div key={`${band.start}-${band.end}`}>
        <span>{band.act}</span>
      </div>
    )); */

  /*   {
    days.map(timeslot => (
      <div key={`${timeslot.start}-${timeslot.end}`}>
        <span>{timeslot.act}</span>
      </div>
    ));
  }
  console.log(e); */
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
