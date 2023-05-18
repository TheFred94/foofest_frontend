import Head from "next/head";
import Anchor from "@/components/Anchor";
import { Spotify } from "@/components/svgs";
import { Youtube } from "@/components/svgs";
import "material-symbols";

export default function Product({ bandData, scheduleData }) {
  console.log(bandData);
  console.log("scheduleData", scheduleData);
  const logoUrl = bandData.logo.startsWith("https://") ? bandData.logo : `https://scratched-bronze-lingonberry.glitch.me/logos/${bandData.logo}`;
  // matching act is initialized as null
  let matchingAct = null; // Initialize a variable to store the matching act

  // locationKey is the variable used to loop through each location object in scheduleData.
  // scheduleData = object with nested objects and arrays, where each object represents a different location

  // Loop through each key in the scheduleData object
  for (const locationKey in scheduleData) {
    const location = scheduleData[locationKey];
    // Loop through each day in the current location
    for (const dayKey in location) {
      const day = location[dayKey];
      // Loop through each act on the current day
      for (const act of day) {
        // If the act's name matches the bandData's name
        if (act.act === bandData.name) {
          // Create a new object with the act's data and location/day info
          matchingAct = {
            start: act.start,
            end: act.end,
            day: dayKey,
            stage: locationKey,
          };

          // Check if the matching act is cancelled and add the the property to the mathcingAct object if true
          if (act.cancelled) {
            matchingAct.cancelled = act.cancelled;
          }

          // console.log({ matchingAct });
          // console.log(matchingAct.day);

          // Break out of the innermost loop since a match has been found
          break;
        }
      }
      // If a match has been found, break out of the middle loop
      if (matchingAct) {
        break;
      }
    }
    // If a match has been found, break out of the outermost loop
    if (matchingAct) {
      break;
    }
  }
  if (matchingAct.day === "sun") {
    matchingAct.day = "Sunday";
  } else if (matchingAct.day === "mon") {
    matchingAct.day = "Monday";
  } else if (matchingAct.day === "tue") {
    matchingAct.day = "Tuesday";
  } else if (matchingAct.day === "wed") {
    matchingAct.day = "Wednesday";
  } else if (matchingAct.day === "thu") {
    matchingAct.day = "Thursday";
  } else if (matchingAct.day === "fri") {
    matchingAct.day = "Friday";
  } else if (matchingAct.day === "sat") {
    matchingAct.day = "Saturday";
  } else {
    matchingAct.day = "Invalid day";
  }

  // matchingAct now contains the data for the matching act, if any.
  // This can be used to display the relevant information on the page.
  console.log(matchingAct);
  console.log(matchingAct.cancelled);
  return (
    <>
      <Head>
        <title>{bandData.name}</title>
      </Head>
      <div className="relative aspect-video object-contain grid ">
        <Anchor href="/" className="absolute left-5 top-5 z-40">
          <span className="material-symbols-outlined">arrow_circle_left</span>
        </Anchor>

        {matchingAct.cancelled === true ? (
          <div className="grid items-center justify-items-center ">
            <h2 className="w-full text-center bg-color-white z-40 grid col-start-1 row-start-1 text-color-blue">Cancelled</h2>
            <img src={logoUrl} alt={bandData.bio} className="z-10 filter grayscale object-contain w-full col-start-1 row-start-1 aspect-video " />
          </div>
        ) : (
          <img src={logoUrl} alt={bandData.bio} className="w-full aspect-video object-contain z-10" />
        )}
        <img src={logoUrl} alt={bandData.bio} className="absolute z-0 grid-row-1 w-full aspect-video object-fill blur-sm" />
      </div>
      <h3 className="text-4xl pt-2 pb-3 ">{bandData.name}</h3>
      <section className="pb-5">
        <p>{bandData.genre}</p>
      </section>
      {matchingAct && (
        <section className="pb-8">
          <p>
            <span className="font-semibold"> {matchingAct.day}</span>, {matchingAct.start}
          </p>

          <span className="font-thin font-sans text-xl text-color-white">{matchingAct.stage}</span>
        </section>
      )}
      <section className="pb-10">
        <h3>Biografi</h3>
        <p>{bandData.bio}</p>
      </section>
      <div className="flex justify-center gap-10">
        <Spotify className="w-12 h-12 mr-10" />
        <Youtube className="w-12 h-12" />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const band = context.params.band;

  // Fetch post data from API using the ID parameter

  const [res1, res2] = await Promise.all([fetch(`http://localhost:8080/bands/${band}`), fetch(`http://localhost:8080/schedule`)]);

  const bandData = await res1.json();
  const scheduleData = await res2.json();

  // Pass the post data as props to the page
  return {
    props: {
      bandData,
      scheduleData,
    },
  };
}
