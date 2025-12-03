function LeaderCard({ leader }) {
  return (
    <div className="flex flex-col items-center space-y-3 rounded-xl px-5 py-5 shadow-lg">
      <div className="rounded-full">
        <img className="rounded-full" src={leader.img} alt={leader.img} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{leader.name}</span>
        <span className="font-semibold text-blue-600">{leader.role}</span>
      </div>
      <p className="text-sm">{leader.description}</p>
    </div>
  );
}

export default LeaderCard;
