import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineUsers,
} from "react-icons/hi2";
import StatisticCard from "./StatisticCard";

function Statistic() {
  const stats = [
    {
      icon: <HiOutlineUsers />,
      number: "1,200+",
      label: "Students",
    },
    {
      icon: <HiOutlineBookOpen />,
      number: "85",
      label: "Teachers",
    },
    {
      icon: <HiOutlineAcademicCap />,
      number: "50+",
      label: "Awards Won",
    },
    {
      icon: <HiOutlineAcademicCap />,
      number: "35+",
      label: "Years of Excellence",
    },
  ];
  return (
    <div className="grid grid-cols-4 bg-gray-50 px-5 py-10">
      {stats.map((stat) => (
        <StatisticCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

export default Statistic;
