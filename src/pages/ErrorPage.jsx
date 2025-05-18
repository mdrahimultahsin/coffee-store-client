import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import errorImg from "../images/404/404.gif";
import { useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <Header></Header>
        <main>
          <section className="flex justify-center items-center flex-col mt-5">
            <div className="mx-auto ">
              <button
                onClick={() => navigate(-1)}
                className="font-rancho text-2xl btn bg-transparent shadow-none border-none shadow-text mx-auto"
              >
                {" "}
                <FaArrowLeftLong size={18} />
                Back To Home
              </button>
            </div>
            <img src={errorImg} alt="" />
          </section>
        </main>
        <footer className="bg-base-300">
          <Footer></Footer>
        </footer>
      </header>
    </div>
  );
};

export default ErrorPage;
