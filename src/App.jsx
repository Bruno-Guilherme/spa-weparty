import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
