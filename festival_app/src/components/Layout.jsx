import Anchor from "./Anchor";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-color-black to-color-blue m-auto">
        {children}
        <footer>Footer</footer>
      </div>
    </>
  );
}
