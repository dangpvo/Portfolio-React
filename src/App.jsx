import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Featured from "./sections/Featured";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import useLazyLoading from "./utils/useLazyLoading";
import TechStack from "./sections/TechStack";

const App = () => {
  useLazyLoading();

  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <Featured></Featured>
        <Work></Work>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
