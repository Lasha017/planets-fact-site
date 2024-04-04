import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/landing/Landing";
import Mercury from "./pages/mercury/Mercury";
import MiddleMercury from "./pages/mercury/MiddleMercury";
import LastMercury from "./pages/mercury/LastMercury";
import Venus from "./pages/venus/Venus";
import MiddleVenus from "./pages/venus/MiddleVenus";
import LastVenus from "./pages/venus/LastVenus";
import Earth from "./pages/earth/Earth";
import MiddleEarth from "./pages/earth/MiddleEarth";
import LastEarth from "./pages/earth/LastEarth";
import Mars from "./pages/mars/Mars";
import MarsMiddle from "./pages/mars/MarsMiddle";
import Jupiter from "./pages/jupiter/Jupiter";
import JupiterMiddle from "./pages/jupiter/JupiterMiddle";
import Saturn from "./pages/saturn/Saturn";
import JupiterLast from "./pages/jupiter/JupiterLast";
import MiddleSaturn from "./pages/saturn/MiddleSaturn";
import LastSaturn from "./pages/saturn/LastSaturn";
import Neptune from "./pages/neptune/Neptune";
import MiddleNeptune from "./pages/neptune/MiddleNeptune";
import LastNeptune from "./pages/neptune/LastNeptune";
import Uranus from "./pages/uranus/Uranus";
import MiddleUranus from "./pages/uranus/MiddleUranus";
import LastUranus from "./pages/uranus/LastUranus";
import MarsLast from "./pages/mars/MarsLast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/mercury-structure" element={<MiddleMercury />} />
        <Route path="/mercury-surface" element={<LastMercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/venus-structure" element={<MiddleVenus />} />
        <Route path="/venus-surface" element={<LastVenus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/earth-structure" element={<MiddleEarth />} />
        <Route path="/earth-surface" element={<LastEarth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/mars-structure" element={<MarsMiddle />} />
        <Route path="/mars-surface" element={<MarsLast />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/jupiter-structure" element={<JupiterMiddle />} />
        <Route path="/jupiter-surface" element={<JupiterLast />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/saturn-structure" element={<MiddleSaturn />} />
        <Route path="/saturn-surface" element={<LastSaturn />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/neptune-structure" element={<MiddleNeptune />} />
        <Route path="/neptune-surface" element={<LastNeptune />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/uranus-structure" element={<MiddleUranus />} />
        <Route path="/uranus-surface" element={<LastUranus />} />
      </Routes>
    </Router>
  );
}

export default App;