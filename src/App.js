import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Navbar from "./components/Navbar";
import Hardware from "./pages/hardware/Hardware";
import Software from "./pages/software/Software";
import Troubleshoot from "./pages/troubleshoot/Troubleshoot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hardware" element={<Hardware/>} />
          <Route path="/software" element={<Software/>} />
          <Route path="/troubleshoot" element={<Troubleshoot/>} />
          <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
