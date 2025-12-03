import {
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineUsers,
} from "react-icons/hi2";
import { TbWorldLatitude } from "react-icons/tb";
import ValuesCard from "./ValuesCard";

function OurValues() {
  const values = [
    {
      icon: <HiOutlineHeart />,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and ethical behavior in all our interactions.",
    },
    {
      icon: <HiOutlineLightBulb />,
      title: "Innovation",
      description:
        "We embrace creative thinking and modern teaching methods to enhance learning experiences.",
    },
    {
      icon: <HiOutlineUsers />,
      title: "Community",
      description:
        "We foster a supportive environment where everyone feels valued and respected.",
    },
    {
      icon: <TbWorldLatitude />,
      title: "Global Perspective",
      description:
        "We prepare students to be responsible global citizens with cultural awareness.",
    },
  ];
  return (
    <div className="space-y-5 px-10 py-15 text-center">
      <h2>Our Core Values</h2>
      <p className="text-xl">
        The principles that guide everything we do at Demonstration Academy,
        Academy
      </p>
      <div className="my-6 grid grid-cols-4 gap-10">
        {values.map((value) => (
          <ValuesCard key={value.title} value={value} />
        ))}
      </div>
    </div>
  );
}

export default OurValues;
