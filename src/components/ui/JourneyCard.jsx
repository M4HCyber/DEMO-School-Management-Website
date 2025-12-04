function JourneyCard({ journey }) {
  return (
    <div className="m-auto flex items-start gap-5 text-left">
      <div className="w-15 rounded-xl bg-blue-600 bg-linear-to-r from-cyan-500 to-blue-500 py-1 text-center text-sm text-white">
        {journey.date}
      </div>
      <div className="w-[50rem] rounded-lg border-l-4 border-blue-500 bg-white px-4 py-4 shadow-xs">
        <p>{journey.description}</p>
      </div>
    </div>
  );
}

export default JourneyCard;
