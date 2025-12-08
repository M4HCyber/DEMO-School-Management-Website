import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { HomeProvider } from "./contexts/HomeContext";

function App() {
  return (
    <BrowserRouter>
      <HomeProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HomeProvider>
    </BrowserRouter>
  );
}

export default App;
