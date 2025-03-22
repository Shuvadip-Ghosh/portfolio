import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Services from "./components/services.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";
import Project from "./components/project.js";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<><Home /><Outlet/></>} >
                    <Route path="services" element={<Services />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
