import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import "./scss/main.scss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h1>404 <br/>Page not found !!!</h1>} />
    </Routes>
  );
}

export default App;
