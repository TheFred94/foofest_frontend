import "@/styles/globals.css";
import Layout from "@/components/Layout";
import App from "next/app";

export default function MyApp({ Component, pageProps, bandData }) {
  return (
    <>
      <Layout bandData={bandData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
