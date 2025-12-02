import Achievements from "../components/ui/Achievements";
import Button from "../components/ui/Button";
import Community from "../components/ui/Community";
import Highlight from "../components/ui/Highlight";
import NoticeBoard from "../components/ui/NoticeBoard";
import Statistic from "../components/ui/Statistic";

function Home() {
  return (
    <div className="">
      <section>
        <div className="bg-blue-600 p-20 text-center text-gray-100">
          <div className="m-auto w-[70%] space-y-5">
            <h1 className="font-extrabold">
              Welcome to Demonstration Academy, Azare
            </h1>
            <p className="text-2xl">
              Empowering minds, shaping futures. Where excellence meets
              opportunity in education.
            </p>
            <div className="mt-10 space-x-10">
              <Button to="/about" style="bg-gray-100 text-blue-600 font-bold">
                Learn More About U
              </Button>{" "}
              <Button to="/contact" style="bg-gray-100 text-blue-600 font-bold">
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
      <section className="grid grid-cols-2 gap-15 bg-gray-50 px-10 py-15">
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
