import "@/styles/globals.css";
import Layout from "@/components/Layout";
import App from "next/app";

export default function MyApp({ Component, pageProps, bandData }) {
  return (
    <>
      <Layout bandData={bandData}>
        <Component {...pageProps} />
      </Layout>
      <BandList bandData={bandData}></BandList>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("http://localhost:8080/bands");
  const bandData = await res.json();
  console.log(bandData);
  return { ...appProps, bandData };
};

function BandList(props) {
  return props.bandData.map((band) => <Band {...band} />);
}

function Band(band) {
  return (
    <>
      <li>{band.name}</li>
    </>
  );
}
