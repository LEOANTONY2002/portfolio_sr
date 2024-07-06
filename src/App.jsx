import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./screens/Portfolio";
import About from "./screens/About";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
