import {
  HiOutlineBookOpen,
  HiOutlineTrophy,
  HiOutlineUsers,
} from "react-icons/hi2";
import HighlightCard from "./HighlightCard";

function Highlight() {
  const highlights = [
    {
      icon: <HiOutlineTrophy />,
      title: "Academic Excellence",
      bgcolor: "bg-green-200",
      txtcolor: "text-green-600",
      description:
        "Consistently ranked among the top performing schools with 98% graduation rate and outstanding exam results.",
    },
    {
      icon: <HiOutlineUsers />,
      title: "Expert Faculty",
      bgcolor: "bg-purple-200",
      txtcolor: "text-purple-600",
      description:
        "Consistently ranked among the top performing schools with 98% graduation rate and outstanding exam results.",
    },
    {
      icon: <HiOutlineBookOpen />,
      title: "Modern Facilities",
      bgcolor: "bg-blue-200",
      txtcolor: "text-blue-600",
      description:
        "State-of-the-art classrooms, science labs, library, and sports facilities to support holistic development.",
    },
  ];
  return (
    <div className="space-y-10 px-10 py-10">
      <div className="space-y-2.5 text-center">
        <h2>School Highlights</h2>
        <p className="text-xl">
          Discover what makes Sunrise Academy a leader in educational excellence
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.title} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default Highlight;
