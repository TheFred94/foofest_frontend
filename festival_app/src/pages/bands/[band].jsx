import Head from "next/head";
import Anchor from "@/components/Anchor";
import { Spotify } from "@/components/svgs";
import { Youtube } from "@/components/svgs";

export default function Product({ bandData, scheduleData }) {
  console.log(bandData);
  // console.log("scheduleData", scheduleData);
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
  // matchingAct now contains the data for the matching act, if any.
  // This can be used to display the relevant information on the page.

  return (
    <>
      <Head>
        <title>{bandData.name}</title>
      </Head>
      <div className="relative aspect-video object-contain">
        <Anchor href="/" className="absolute left-5 top-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F9F01F" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </Anchor>

        <img src={logoUrl} alt={bandData.bio} className="object-cover w-full " />
      </div>
      <h2 className="text-4xl ">{bandData.name}</h2>
      <section>
        <p>{bandData.genre}</p>
      </section>
      {matchingAct && (
        <section>
          <p className="font-light">
            <span className="font-bold">Start:</span> {matchingAct.start}
          </p>
          <p>
            <span className="font-bold">End:</span> {matchingAct.end}
          </p>
          <p>
            <span className="font-bold">Day:</span> {matchingAct.day}
          </p>
          <p>
            <span className="font-bold">Stage:</span> {matchingAct.stage}
          </p>
        </section>
      )}
      <section>
        <h3>Biografi</h3>
        <p>{bandData.bio}</p>
      </section>
      <div className="flex justify-center gap-10">
        <Spotify className="" />
        <Youtube />
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
