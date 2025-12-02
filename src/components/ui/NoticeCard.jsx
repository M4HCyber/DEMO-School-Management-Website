function NoticeCard({ notice }) {
  const { title, level, description, date, status } = notice;
  let style;
  if (level === "high") style = "bg-red-200 text-red-800";
  if (level === "medium") style = "bg-yellow-200 text-yellow-800";
  if (level === "low") style = "bg-green-200 text-green-800";
  return (
    <div className="border-l-4 border-blue-500 px-5 py-2">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{title}</span>
        <span
          className={`${style} h-fit rounded-2xl px-4 text-sm font-semibold`}
        >
          {level}
        </span>
      </div>
      <p>{description}</p>
      <div className="mt-3 flex gap-4 text-sm">
        <span>{date}</span>
        <span className="rounded-xl border-1 border-gray-300 px-3 font-semibold">
          {status}
        </span>
      </div>
    </div>
  );
}

export default NoticeCard;
