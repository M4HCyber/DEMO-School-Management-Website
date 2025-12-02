import Button from "./Button";

function Community() {
  return (
    <div className="flex flex-col items-center gap-3 bg-blue-600 px-10 py-15 text-gray-50">
      <div className="w-[70%] space-y-5 text-center">
        <h2>Ready to Join Our Community?</h2>
        <p className="text-2xl">
          Take the first step towards an excellent education. Apply now or
          schedule a visit to see our campus.
        </p>
      </div>

      <div className="mt-10 space-x-10">
        <Button to="/login" style="bg-gray-100 text-blue-600 font-bold">
          Apply Now
        </Button>
        <Button to="/contact" style="bg-gray-100 text-blue-600 font-bold">
          Schedule a Visit
        </Button>
      </div>
    </div>
  );
}

export default Community;
