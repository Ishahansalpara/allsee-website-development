import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default NavbarLayout;