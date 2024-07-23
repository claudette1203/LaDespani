import Navbar from "../components/Navbar";
import Pictures from "../components/Pictures";
import { Divider } from "@mui/material";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Rooms from "../components/Rooms";
import About from "../components/About";
import GodRays from "../components/GodRays";

function MainPage() {
    return (
        <>
            <Navbar />
            <Divider />
            <About />
            <Rooms />
            <Pictures />
            <Location />
            <Footer />
            <GodRays />
        </>
    );
}

export default MainPage;