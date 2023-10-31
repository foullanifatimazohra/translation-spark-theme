import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
