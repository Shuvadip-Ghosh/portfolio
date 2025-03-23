import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Services from "./components/services.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";
import Builds from "./components/builds.js";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<><Home /><Outlet/></>} >
                    <Route path="services" element={<Services />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/builds" element={<Builds />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
