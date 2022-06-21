import Footer from "Components/layout/Footer";
import Navbar from "Components/layout/Navbar";


const HomeLayout = ({ children }) => {
    return <div>
        <Navbar />
        <main className="mt-14">{children}</main>
        <Footer />
    </div>;
};
export default HomeLayout;