import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { MainPage } from "./components/Main/MainPage";
import { Navbar } from "./components/NavBar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
