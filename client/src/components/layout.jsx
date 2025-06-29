import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-[#f7f5f5]">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;