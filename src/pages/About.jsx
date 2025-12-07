import AboutCards from "../components/ui/AboutCards";
import Journey from "../components/ui/Journey";
import Leadership from "../components/ui/Leadership";
import OurValues from "../components/ui/OurValues";

function About() {
  return (
    <div>
      <section>
        <div className="bg-blue-600 bg-linear-to-r from-blue-500 to-cyan-500 p-10 text-center text-gray-100 md:p-20">
          <div className="m-auto space-y-5 lg:w-[70%]">
            <h1 className="font-extrabold">
              About Demonstration Academy, Azare
            </h1>
            <p className="text-2xl">
              Nurturing minds, building character, and shaping the leaders of
              tomorrow since 1985
            </p>
          </div>
        </div>
      </section>
      <section>
        <AboutCards />
      </section>
      <section>
        <OurValues />
      </section>
      <section>
        <Journey />
      </section>
      <section>
        <Leadership />
      </section>
    </div>
  );
}

export default About;
