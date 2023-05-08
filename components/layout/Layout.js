import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import FooterV1 from "./Footer";
import HeaderV1 from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Layout = ({ children, headerStyle, currentPage }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  useEffect(() => {
    // const router = useRouter()
    console.log('rrr',currentPage)
  },[])

  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

      <HeaderV1 handleOpen={handleOpen} headerStyle={headerStyle} activePage={currentPage}/>
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <FooterV1 />
      <BackToTop />
    </>
  );
};

export default Layout;
