import { HiOutlineBell } from "react-icons/hi2";
import NoticeCard from "./NoticeCard";

function NoticeBoard() {
  const notices = [
    {
      title: "Mid-term Examination Schedule",
      level: "high",
      description:
        "Mid-term examinations will commence from March 15th. Please check your individual timetables.",
      date: new Date().toLocaleDateString(),
      status: "academic",
    },
    {
      title: "Library New Arrivals",
      level: "low",
      description:
        "Mid-term examinations will commence from March 15th. Please check your individual timetables.",
      date: new Date().toLocaleDateString(),
      status: "academic",
    },
    {
      title: "Parent-Teacher Conferece",
      level: "medium",
      description:
        "Annual parent-teacher conference scheduled for March 20th. All parents are invited.",
      date: new Date().toLocaleDateString(),
      status: "event",
    },
  ];
  return (
    <div className="h-fit space-y-4 rounded-xl border-1 border-gray-300 bg-white p-7">
      <h3 className="flex items-center gap-2">
        <span>
          <HiOutlineBell />
        </span>
        Notice Board
      </h3>
      <div className="flex flex-col gap-5">
        {notices.map((notice) => (
          <NoticeCard notice={notice} key={notice.title} />
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;
