import Button from "@mui/material/Button";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Checkbox, Snackbar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function Program({ schedule, bands }) {
  // console.log(schedule);
  // console.log(bands);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedAct, setSelectedAct] = useState(null);
  const [snackOpen, setSnackOpen] = useState([false, ""]);
  const [favourites, setFavourites] = useState([])

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

  const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

const LocalStorageFavourite = (e) => {
    // console.log(e)
    if (snackOpen[0] === true) {
      closeSnack
      CheckFavourites(e.target.value, e.target.checked)
      sleep(500).then(() => {
      if(e.target.checked === true) {
        setSnackOpen([true, `${e.target.value} has been added to favourites`])
        // localStorage.setItem("favourites", JSON.stringify(favourites));
      } else {
        setSnackOpen([true, `${e.target.value} has been removed from favourites`])
      }
    })
      } else if (snackOpen[0] === false) {
      e.target.checked === true ?
      setSnackOpen([true, `${e.target.value} has been added to favourites`])
      :
      setSnackOpen([true, `${e.target.value} has been removed from favourites`])
      }
    }

    function closeSnack() {
    setSnackOpen([false, ""]);
  }

  function CheckFavourites(band, i) {
    if (i === true) {
      if (favourites.length === 0) {
        setFavourites([band])
      } else {
        setFavourites([...favourites, band])
      }
      console.log(favourites)
    } else {
      if (favourites.length <= 1) {
        setFavourites([])
      } else {
        const newFavourites = favourites.filter(fav => fav != band)
        setFavourites(newFavourites)
      }
      console.log(favourites)
    }
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
    <div className="bg-gradient-to-b from-color-black to-color-blue">
      <h1>Program</h1>
      <TextField onChange={handleChange}></TextField>
      <FilterbuttonsStage schedule={schedule} onClick={handleStageClick} />
      <FilterbuttonsDay schedule={schedule} onClick={handleDayClick} />
      <Schedule schedule={schedule} selectedStage={selectedStage} selectedDay={selectedDay} selectedAct={selectedAct} bands={bands} LocalStorageFavourite={LocalStorageFavourite} />
      <Snackbar open={snackOpen[0]} autoHideDuration={4000} onClose={closeSnack} message={snackOpen[1]} action={action} />;
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

function Schedule({ schedule, selectedStage, selectedDay, selectedAct, bands, LocalStorageFavourite }) {

  //   function LocalStorageFavourite(e) {
  //   console.log(e);
  //   if (e.target.checked) {
  //     setSnackOpen([true, e.target.value, `${e.target.value} has been added to favourites.`]);
  //   }
  // }

  //   function closeSnack() {
  //   setSnackOpen([false, "", ""]);
  // }



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
              bands={bands}
              LocalStorageFavourite={LocalStorageFavourite}
              />
          </div>} else {return <div key={stage}>
            <h2>{stage}</h2>
            <ObjectDay
              schedule={schedule}
              stage={...schedule[stage]}
              selectedDay={selectedDay}
              selectedAct={selectedAct}
              bands={bands}
              LocalStorageFavourite={LocalStorageFavourite}
            />
          </div>
          }
})}
    </div>
  );
}

function ObjectDay({stage, selectedDay, selectedAct, bands, LocalStorageFavourite }) {

  const fullDayName = (day) => {
    if (day === "mon") {
      return "Monday"
    } else if (day === "tue") {
      return "Tuesday"
  } else if (day === "wed") {
      return "Wednesday"
  } else if (day === "thu") {
      return "Thursday"
  } else if (day === "fri") {
      return "It's Friday, Friday, Gotta get down on Friday"
  } else if (day === "sat") {
      return "Saturday"
  } else if (day === "sun") {
      return "Sunday"
  }
}

  // {
  //   /* Denne function gør at vi kan filtrere på hvilken dag der skal vises program for */
  // }
  return Object.keys(stage)
    .filter(day => !selectedDay || day === selectedDay)
    .map(day => {
     if (selectedDay === (day) ){
      return <div key={day}>
        <h3>{fullDayName(day)}</h3>
        <div key={day} className="bandList grid sm:grid-cols-1 md:grid-cols-2 md:mb-4 lg:grid-cols-3">
        <ObjectBand days={...stage[day]} selectedAct={selectedAct} bands={bands} LocalStorageFavourite={LocalStorageFavourite} />
        </div>
      </div>
    } else { 
      return <div key={day}>
        <h3>{fullDayName(day)}</h3>
        <div key={day} className="bandList grid sm:grid-cols-1 md:grid-cols-2 md:mb-4 lg:grid-cols-3">
        <ObjectBand days={...stage[day]} selectedAct={selectedAct} bands={bands} LocalStorageFavourite={LocalStorageFavourite} />
        </div>
      </div>
}});
}

function ObjectBand({ days, selectedAct, bands, LocalStorageFavourite }) {

  // console.log("days", days)
  // console.log("selectedAct", selectedAct)
  // console.log("bands", bands)

    const backgroundImage = (name) => {
    // console.log(name);
    // console.log("bands", bands);
    for (let i = 0; i < bands.length; i++) {
      if (name === bands[i].name) {
        return bands[i].logo.startsWith("https://") ? `url("${bands[i].logo}"` : `url("https://scratched-bronze-lingonberry.glitch.me/logos/${bands[i].logo}")`;
      }
    }
  };
/*   console.log(Object.values(days)) */
  return Object.values(days).filter(band => band.act.toLowerCase() !== "break" && (!selectedAct || band.act.toLowerCase().includes(selectedAct))).map(band => (
    <div key={band.act} style={{ backgroundImage: backgroundImage(band.act) }} className="relative grid grid-rows-2 items-start justify-items-center bg-cover bg-no-repeat h-96 pt-20 pb-110 px-8" >

    <div className="iconContainer absolute top-5 right-5 w-3 h-3 bg-color-white p-5 rounded-full flex items-center justify-center">
      <Checkbox
        onClick={LocalStorageFavourite}
        value={band.act}
        className="p-0"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        color="error"
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 30 },
            }}
      />
      </div>
      <span className="text-color-blue px-6 py-3 text-3xl text-center bg-color-yellow-75">{band.act}</span>
      <span className="text-color-blue px-6 py-3 text-2xl text-center bg-color-yellow-75">
      {band.start} - {band.end}
      </span>
      </div>
))

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
