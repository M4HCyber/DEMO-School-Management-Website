import { HiOutlineCalendar, HiOutlineStar } from "react-icons/hi2";

function AchievementCard({ achievement }) {
  return (
    <div className="flex items-start gap-5 rounded-2xl border-l-[6px] border-blue-500 bg-white px-10 py-5 shadow-sm">
      <div className="rounded-full bg-blue-200 p-2 text-2xl">
        <HiOutlineStar />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-semibold">{achievement.title}</p>
        <p>{achievement.description}</p>
        <p className="flex items-center gap-2">
          <HiOutlineCalendar />
          {achievement.date}
        </p>
      </div>
    </div>
  );
}

export default AchievementCard;
