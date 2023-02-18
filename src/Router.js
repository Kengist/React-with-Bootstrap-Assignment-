import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import WelcomeMessage from "./components/WelcomeMessage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
