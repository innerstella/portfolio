import React from "react";
import More from "../components/More";
import Intro from "../components/Intro";
import Project from "../components/Project";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Project />
      <More />
    </>
  );
};

export default Home;
