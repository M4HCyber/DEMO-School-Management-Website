import JourneyCard from "./JourneyCard";

function Journey() {
  const journey = [
    {
      id: crypto.randomUUID(),
      date: 1985,
      description: "Demonstration Academy, was founded with 50 students",
    },
    {
      id: crypto.randomUUID(),
      date: 1995,
      description: "Demonstration Academy, was founded with 50 students",
    },
    {
      id: crypto.randomUUID(),
      date: 2005,
      description: "Demonstration Academy, was founded with 50 students",
    },
    {
      id: crypto.randomUUID(),
      date: 2015,
      description: "Demonstration Academy, was founded with 50 students",
    },
    {
      id: crypto.randomUUID(),
      date: 2020,
      description: "Demonstration Academy, was founded with 50 students",
    },
    {
      id: crypto.randomUUID(),
      date: 2025,
      description: "Demonstration Academy, was founded with 50 students",
    },
  ];
  return (
    <div className="space-y-5 bg-gray-50 px-10 py-15 text-center">
      <h2>Our Journey</h2>
      <p className="text-xl">A timeline of growth, and innovation</p>
      <div className="flex flex-col gap-8">
        {journey.map((journey) => (
          <JourneyCard key={journey.id} journey={journey} />
        ))}
      </div>
    </div>
  );
}

export default Journey;
