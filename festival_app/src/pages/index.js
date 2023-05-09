import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to FooFest!</title>
      </Head>
      <h1>Hello from home</h1>

      <Anchor href="/bands">Bands</Anchor>
    </>
  );
}
