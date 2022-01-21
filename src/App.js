import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Todo, Todos } from "./components";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
