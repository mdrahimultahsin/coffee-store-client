import React from "react";
import {Outlet} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-base-300">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
