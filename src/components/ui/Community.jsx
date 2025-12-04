import Button from "./Button";

function Community() {
  return (
    <div className="relative m-auto my-20 w-[90%] sm:px-10">
      <div className="absolute -top-5 z-0 m-auto hidden h-30 w-[85%] rounded-3xl bg-linear-to-r from-blue-500 to-cyan-500 shadow-2xl sm:right-10 md:block lg:right-20"></div>{" "}
      <div className="absolute -top-10 z-1 m-auto hidden h-30 w-[75%] rounded-3xl bg-linear-to-r from-blue-500 to-cyan-500 shadow-2xl sm:right-20 md:block lg:right-40"></div>
      <div className="relative z-30 m-auto my-20 flex w-full flex-col items-center gap-3 rounded-3xl bg-blue-600 bg-linear-to-r from-blue-500 to-cyan-500 px-10 py-20 text-gray-50 shadow-2xl">
        <div className="space-y-5 text-center">
          <h2>Ready to Join Our Community?</h2>
          <p className="text-2xl">
            Take the first step towards an excellent education. Apply now or
            schedule a visit to see our campus.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 text-center sm:flex-row">
          <Button to="/login" style="bg-gray-100 text-blue-600 font-semibold">
            Apply Now
          </Button>
          <Button to="/contact" style="bg-gray-100 text-blue-600 font-semibold">
            Schedule a Visit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Community;
