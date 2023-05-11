import Head from "next/head";
import Anchor from "@/components/Anchor";
import App from "next/app";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
export default function MyApp({ bands }) {
  console.log(bands);
  return (
    <>
      <Head>
        <title>Welcome to FooFest!</title>
      </Head>
      <Navbar />
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
  return props.bands.map(band => <Band {...band} />);
}

function Band(band) {
  return (
    <>
      <li>{band.name}</li>
      <Button variant="contained" className="bg-[hotpink] hover:bg-[orange] active:bg-violet-700">
        <Anchor href={`/bands/${band.slug}`}>Read more</Anchor>
      </Button>
    </>
  );
}
