import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeLayout = ({ children }) => {
    return <div>
        <Navbar />
        <main className="mt-14">{children}</main>
        <Footer />
    </div>;
};
export default HomeLayout;