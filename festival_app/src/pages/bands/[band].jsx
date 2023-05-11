import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Product({ data }) {
  console.log(data);
  const logoUrl = data.logo.startsWith("https://") ? data.logo : `../../../foofest_backend/public/logos/${data.logo}`;
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Anchor href="/">Go back</Anchor>
      <h1>{data.name}</h1>
      <img src={logoUrl} alt={data.bio}></img>
    </>
  );
}

export async function getServerSideProps(context) {
  const band = context.params.band;

  // Fetch post data from API using the ID parameter

  const res = await fetch(`http://localhost:8080/bands/${band}`);

  const data = await res.json();

  // Pass the post data as props to the page
  return {
    props: {
      data,
    },
  };
}

// export async function getStaticProps(context) {
//   const slug = context.params.stupid;
//   const api = "http://localhost:8080/bands/" + slug;
//   const res = await fetch(api);
//   /* if (res.status != 200) {
//     return {
//       notFound: true,
//     };
//   }
//  */
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const api = "http://localhost:8080/bands";
//   const res = await fetch(api);
//   const data = await res.json();
//   const paths = data.map((object) => {
//     return { params: { stupid: String(object.id) } };
//   });

//   console.log(data);

//   return {
//     paths,
//     fallback: false,
//   };
// }
