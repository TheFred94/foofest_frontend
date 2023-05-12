import Anchor from "./Anchor";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-color-black to-color-blue">
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  );
}
