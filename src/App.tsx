import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AsistentePage from "./pages/AssistancePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/asistente" element={<AsistentePage />} />
    </Routes>
  );
}

export default App;
