function StatisticCard({ stat }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="rounded-full bg-blue-100 p-3 text-4xl text-blue-500">
        {stat.icon}
      </div>
      <div className="text-2xl font-bold">{stat.number}</div>
      <div>{stat.label}</div>
    </div>
  );
}

export default StatisticCard;
