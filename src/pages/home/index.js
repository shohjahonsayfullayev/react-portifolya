import React from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Hello } from "./components/hello"
import { About } from "./components/about"
import Sledir from "./components/sledir";



export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Hello/>
      <About/>
      {/* <Sleader/> */}
      <Sledir/>
    </>
  );
};

