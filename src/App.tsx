import { Outlet } from "react-router";
import Navbar from "./components/nav-bar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
