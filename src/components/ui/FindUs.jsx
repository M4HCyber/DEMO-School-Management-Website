import { HiOutlineLocationMarker } from "react-icons/hi";

function FindUs() {
  return (
    <div className="space-y-4 bg-gray-50 px-10 py-15 text-center">
      <h2>Find Us</h2>
      <p>Visit our beautiful campus in the heart of Learning City</p>

      <div className="m-auto my-5 flex h-[20rem] w-[50rem] flex-col items-center justify-center space-y-3 rounded-xl bg-gray-200">
        <span className="text-5xl">
          <HiOutlineLocationMarker />
        </span>
        <h3>Interactive Map Coming Soon 123 Education</h3>
        <p>Street, Learning City, LC 12345</p>
      </div>
    </div>
  );
}

export default FindUs;
