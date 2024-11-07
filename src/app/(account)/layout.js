import EndLinks from "@/Components/Footer/endLinks";
import Footer from "@/Components/Footer/Footer";
import SmFooter from "@/Components/Footer/smFooter";
import NavBar from "@/Components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <SmFooter />
    </>
  );
};

export default MainLayout;
