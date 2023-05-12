import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <div className="">
      {children}
      <footer>Footer</footer>
    </div>
  );
}
