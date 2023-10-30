import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Routes>
        <Route path="/" element={<div>Welcome to home Page</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
