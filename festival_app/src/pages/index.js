import Head from "next/head";
import Anchor from "@/components/Anchor";
import App from "next/app";
import Button from "@mui/material/Button";

export default function MyApp({ bands }) {
  console.log(bands);
  return (
    <>
      <Head>
        <title>Welcome to FooFest!</title>
      </Head>
      <h1>Hello from home</h1>
      <BandList bands={bands} />

      <Anchor href="/bands">Bands</Anchor>
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/bands";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      bands: data,
    },
  };
}

function BandList(props) {
  return props.bands.map((band) => <Band {...band} />);
}

function Band(band) {
  return (
    <>
      <li>{band.name}</li>
      <Button variant="contained" className="bg-indigo-500 hover:bg-violet-600 active:bg-violet-700">
        test knap
      </Button>

      <Anchor href={`/bands/${band.slug}`}>read more</Anchor>
    </>
  );
}
