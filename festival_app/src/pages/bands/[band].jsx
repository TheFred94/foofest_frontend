import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Product({ bandData, scheduleData }) {
  // console.log(bandData);
  console.log("scheduleData", scheduleData);
  const logoUrl = bandData.logo.startsWith("https://") ? bandData.logo : `../../../foofest_backend/public/logos/${bandData.logo}`;
  return (
    <>
      <Head>
        <title>{bandData.name}</title>
      </Head>
      <Anchor href="/">Go back</Anchor>
      <h1>{bandData.name}</h1>
      <img src={logoUrl} alt={bandData.bio}></img>
      <section>
        <p></p>
        <p></p>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const band = context.params.band;

  // Fetch post data from API using the ID parameter

  const [res1, res2] = await Promise.all([fetch(`http://localhost:8080/bands/${band}`), fetch(`http://localhost:8080/schedule`)]);

  const bandData = await res1.json();
  const scheduleData = await res2.json();
  console.log("Data 2:", scheduleData);

  // Pass the post data as props to the page
  return {
    props: {
      bandData,
      scheduleData,
    },
  };
}
