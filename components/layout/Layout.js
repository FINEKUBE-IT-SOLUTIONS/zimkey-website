import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import FooterV1 from "./Footer";
import HeaderV1 from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, headerStyle }) => {
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
  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

      <HeaderV1 handleOpen={handleOpen} headerStyle={headerStyle} />
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <FooterV1 />
      <BackToTop />
    </>
  );
};

export default Layout;
