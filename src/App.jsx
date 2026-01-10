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
import ScrollToTopButton from "./components/ScrollToTopButton";
import useDarkMode from "./utils/useDarkMode";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();
  useLazyLoading([theme]);

  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About theme={theme} />
        <TechStack />
        <Featured />
        <Work />
        <Contact />
      </main>
      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default App;
