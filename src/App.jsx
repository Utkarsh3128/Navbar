import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={`w-screen min-h-screen ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
