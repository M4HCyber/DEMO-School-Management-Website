import Achievements from "../components/ui/Achievements";
import Button from "../components/ui/Button";
import Community from "../components/ui/Community";
import Highlight from "../components/ui/Highlight";
import NoticeBoard from "../components/ui/NoticeBoard";
import Statistic from "../components/ui/Statistic";
import Values from "../components/ui/Values";

function Home() {
  return (
    <div className="">
      <section>
        <div className="relative flex h-screen flex-col items-center justify-center bg-[url(/images/banner-3.png)] bg-cover bg-center p-10 text-gray-100 bg-blend-darken md:items-start md:justify-start md:p-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
          <div className="relative z-10 space-y-10 text-center md:text-left lg:w-[50rem]">
            <h1 className="font-extrabold">
              Demonstration Primary and Secondary School, Azare
            </h1>
            <p className="text-xl sm:text-3xl">
              Empowering minds, shaping futures. Where excellence meets
              opportunity in education.
            </p>
            <div className="md:w-[90%]">
              <Values />
            </div>
            <div className="flex flex-col gap-5 sm:mt-20 sm:flex-row">
              <Button
                to="/about"
                style="bg-linear-to-r bg-blue-600 from-blue-500 to-cyan-500  text-white"
              >
                Learn More About Us
              </Button>{" "}
              <Button to="/contact" style="bg-gray-100 text-blue-600 ">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Statistic />
      </section>
      <section>
        <Highlight />
      </section>
      <section className="grid gap-15 bg-gray-50 px-10 py-15 md:grid-cols-2">
        <Achievements />
        <NoticeBoard />
      </section>
      <section>
        <Community />
      </section>
    </div>
  );
}

export default Home;
