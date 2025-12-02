import AchievementCard from "./AchievementCard";

function Achievements() {
  const achievements = [
    {
      title: "State Mathematics Championship",
      description:
        "Our students won 1st place in the state-level mathematics competition.",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Science Fair Excellence",
      description:
        "Three projects from our school were selected for the national science fair.",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Best Academic Performance",
      description:
        "Recognized as the best performing secondary school in the district.",
      date: new Date().toLocaleDateString(),
    },
  ];
  return (
    <div className="space-y-4">
      <h2>Recent Achievements</h2>
      <div className="flex flex-col gap-7">
        {achievements.map((achievement) => (
          <AchievementCard achievement={achievement} key={achievement.title} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
