
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Blueprint from "./Blueprint";
import CreateContract from "./CreateContract";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/create" element={<CreateContract />} />
      </Routes>
    </BrowserRouter>
  );
}
