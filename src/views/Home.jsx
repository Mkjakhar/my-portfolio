import React from "react";
import Header from "../components/Header";
import GreatPower from "../components/GreatPower";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/common/About";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <>
      <Header />
      <GreatPower />
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </>
  );
};

export default Home;
