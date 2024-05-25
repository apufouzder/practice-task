import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <main>
            <Navbar />

            <Outlet></Outlet>

            <Footer />
        </main>
    );
};

export default MainLayout;