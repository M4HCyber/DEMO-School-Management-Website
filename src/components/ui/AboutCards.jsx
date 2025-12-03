import { HiOutlineEye } from "react-icons/hi2";
import AboutCardItem from "./AboutCardItem";

function AboutCards() {
  const abouts = [
    {
      icon: <HiOutlineEye />,
      title: "Our Mission",
      bgcolor: "bg-blue-200",
      txtcolor: "text-blue-600",
      description:
        "To provide quality education that empowers students with knowledge, skills, and values necessary to become responsible citizens and lifelong learners in a rapidly changing world.",
    },
    {
      icon: <HiOutlineEye />,
      title: "Our Vision",
      bgcolor: "bg-green-200",
      txtcolor: "text-green-600",
      description:
        "To be a leading educational institution that fosters academic excellence, character development, and innovative thinking while preparing students for global citizenship.",
    },
    {
      icon: <HiOutlineEye />,
      title: "Our Achievements",
      bgcolor: "bg-purple-200",
      txtcolor: "text-purple-600",
      description:
        "Recognized as the top-performing secondary school in the district with numerous academic and extracurricular achievements over our 39-year journey.",
    },
  ];
  return (
    <div className="my-5 space-y-10 px-10 py-10">
      <div className="grid grid-cols-3 gap-10">
        {abouts.map((about) => (
          <AboutCardItem key={about.title} about={about} />
        ))}
      </div>
    </div>
  );
}

export default AboutCards;
