import Anchor from "./Anchor";

export default function Layout({ children, bandData }) {
  console.log(bandData);
  return (
    <>
      <nav>
        {bandData.map((obj) => {
          return (
            <Anchor key={obj.id} href={"/bands/" + obj.slug}>
              {obj.title}
            </Anchor>
          );
        })}
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
