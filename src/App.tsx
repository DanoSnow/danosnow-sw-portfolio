import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Resume from "./Pages/Resume";

interface RouteContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

export const RouteContext = createContext<RouteContextType | undefined>(undefined);

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>("/");

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/danosnow-sw-portfolio" element={<Home />} />
            <Route path="/danosnow-sw-portfolio/about" element={<About />} />
            <Route path="/danosnow-sw-portfolio/skills" element={<Skills />} />
            <Route path="/danosnow-sw-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RouteContext.Provider >
  )
}

export default App
