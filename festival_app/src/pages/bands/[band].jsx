import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Product({ bandData, scheduleData }) {
  // console.log(bandData);
  console.log("scheduleData", scheduleData);
  const logoUrl = bandData.logo.startsWith("https://") ? bandData.logo : `../../../foofest_backend/public/logos/${bandData.logo}`;
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
      <Anchor href="/">Go back</Anchor>
      <h1>{bandData.name}</h1>
      <img src={logoUrl} alt={bandData.bio}></img>
      {matchingAct && (
        <section>
          <p>Start: {matchingAct.start}</p>
          <p>End: {matchingAct.end}</p>
          <p>Day: {matchingAct.day}</p>
          <p>Stage: {matchingAct.stage}</p>
        </section>
      )}
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
