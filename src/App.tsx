import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./components/molecules";
import { AnimatePresence } from "framer-motion";
import { HomeSocialLinks } from "./components/atoms";
import { Socials } from "./utils/helper";

const App = () => {
  return (
    <div className="w-ful xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particle container */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* services count card */}
      <ServiceCount />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Alfonso Sirait</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-center text-texlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            impedit porro ea rerum incidunt obcaecati culpa. Nihil facere
            dolore, cupiditate beatae debitis saepe atque repudiandae, sit
            maiores illo commodi fugit.
          </p>
          <p className="text-center text-texlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            impedit porro ea rerum incidunt obcaecati culpa. Nihil facere
            dolore, cupiditate beatae debitis saepe atque repudiandae, sit
            maiores illo commodi fugit.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-center text-texlight">
              alfonsohaseasirait@gmail.com
            </p>
            <p className="text-center text-texlight">+62 812 3456 789</p>
            <a href="#">
              <p className="text-center text-primary">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
