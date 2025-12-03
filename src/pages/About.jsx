import AboutCards from "../components/ui/AboutCards";
import Journey from "../components/ui/Journey";
import Leadership from "../components/ui/Leadership";
import OurValues from "../components/ui/OurValues";

function About() {
  return (
    <div>
      <section>
        <div className="bg-blue-600 p-20 text-center text-gray-100">
          <div className="m-auto w-[70%] space-y-5">
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
