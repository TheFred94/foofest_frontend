import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <>
      <nav></nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
