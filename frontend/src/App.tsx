import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
