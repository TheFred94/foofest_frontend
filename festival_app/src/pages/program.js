import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { red } from "@mui/material/colors";
import { IconButton, Snackbar } from "@mui/material";

export default function Program({ schedule, bands }) {
  // console.log(schedule);
  // console.log(bands);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedAct, setSelectedAct] = useState(null);

  function handleStageClick(stage) {
    setSelectedStage(stage);
  }

  function handleDayClick(day) {
    setSelectedDay(day);
    // console.log(day);
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

function Schedule({ schedule, bands, selectedStage, selectedDay, selectedAct }) {
  const [snackOpen, setSnackOpen] = useState([false, "", ""]);
  // A const, that runs through the bands and matches it witht he act to get their image. Add "style={{backgroundImage}}" and we should have i running. Maybe, it will only show one image, not sure.
  const backgroundImage = (name) => {
    // console.log(name);
    // console.log("bands", bands);
    for (let i = 0; i < bands.length; i++) {
      if (name === bands[i].name) {
        return bands[i].logo.startsWith("https://") ? `url("${bands[i].logo}"` : `url("https://scratched-bronze-lingonberry.glitch.me/logos/${bands[i].logo}")`;
      }
    }
  };

  function LocalStorageFavourite(e) {
    console.log(e);
    if (e.target.checked) {
      setSnackOpen([true, e.target.value, `${e.target.value} has been added to favourites.`]);
    }
  }

  function closeSnack() {
    setSnackOpen([false, "", ""]);
  }

  const action = (
    <>
      <Button color="success" size="small">
        See Personal Program
      </Button>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div className="schedule">
      {/* Denne function gør at vi kan filtrere på hvilke scener der skal vises */}
      {Object.keys(schedule)
        .filter(stage => !selectedStage || stage === selectedStage)
        .map(stage => {
          if(selectedStage === (stage)) { 
            return <div key={stage}>
            <ObjectDay
              schedule={schedule}
              stage={...schedule[stage]}
              selectedDay={selectedDay}
              selectedAct={selectedAct}
            />
          </div>} else {return <div key={stage}>
            <h2>{stage}</h2>
            <ObjectDay
              schedule={schedule}
              stage={...schedule[stage]}
              selectedDay={selectedDay}
              selectedAct={selectedAct}
            />
          </div>
          }
})}
      <Snackbar open={snackOpen[0]} autoHideDuration={4000} onClose={closeSnack} message={snackOpen[2]} action={action} />;
    </div>
  );
}

function ObjectDay({stage, selectedDay, selectedAct }) {
  {
    /* Denne function gør at vi kan filtrere på hvilken dag der skal vises program for */
  }
  return Object.keys(stage)
    .filter(day => !selectedDay || day === selectedDay)
    .map(day => {
     if (selectedDay === (day) ){return <div key={day}>
        
        <ObjectBand days={...stage[day]} selectedAct={selectedAct} />
      </div>} else { return <div key={day}>
        <h3>{day}</h3>
        <ObjectBand days={...stage[day]} selectedAct={selectedAct} />
      </div>}
});
}

function ObjectBand({ days, selectedAct }) {
/*   console.log(Object.values(days)) */
  return Object.values(days).filter(band => band.act.toLowerCase() !== "break" && (!selectedAct || band.act.toLowerCase().includes(selectedAct))).map(band => (<div key={band.act}>
  <span>{band.act}</span>
</div>))

}

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
