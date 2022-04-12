import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
