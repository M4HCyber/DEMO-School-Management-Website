import {
  HiAcademicCap,
  HiBookOpen,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiUsers,
} from "react-icons/hi";
import ValueCard from "./ValueCard";
import { HiMiniAcademicCap } from "react-icons/hi2";

function Values() {
  const values = [
    {
      icon: <HiMiniAcademicCap />,
      title: "Quality Education",
    },
    {
      icon: <HiUsers />,
      title: "Dedicated Teachers",
    },

    {
      icon: <HiBookOpen />,
      title: "Student-Centered Approach",
    },
    {
      icon: <HiAcademicCap />,
      title: "Moral & Academic Excellence",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {values.map((value) => (
        <ValueCard value={value} key={value.title} />
      ))}
    </div>
  );
}

export default Values;
