import LeaderCard from "./LeaderCard";

function Leadership() {
  const leaders = [
    {
      img: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "Dr. Sarah Johnson",
      role: "Principal",
      description:
        "20+ years in education leadership, dedicated to fostering academic excellence and student development.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Prof. Mahmoud Ibrahim",
      role: "Vice Princiapl",
      description:
        "Expert in curriculum development and educational technology, committed to innovative teaching methods.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/62.jpg",
      name: "Dr. Elyas Shuaib",
      role: "Academic Director",
      description:
        "Specialist in student assessment and academic planning, ensuring quality education delivery.",
    },
  ];
  return (
    <div className="space-y-5 px-10 py-15 text-center">
      <h2>Leadership Team</h2>
      <p className="text-xl">
        Meet the dedicated professionals leading our institution
      </p>
      <div className="m-auto grid w-4xl grid-cols-3 items-center justify-center gap-10">
        {leaders.map((leader) => (
          <LeaderCard leader={leader} key={leader.img} />
        ))}
      </div>
    </div>
  );
}

export default Leadership;
