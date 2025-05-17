import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Coffees from "../components/Coffees/Coffees";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      {/* Feature */}
      <section className="bg-base-200">
        <Feature />
      </section>
      {/* Coffees */}
      <section>
        <Coffees />
      </section>
    </div>
  );
};

export default Home;
