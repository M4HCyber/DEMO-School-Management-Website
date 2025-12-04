function StatisticCard({ stat }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 text-center sm:space-y-2">
      <div className="rounded-full bg-blue-100 p-3 text-2xl text-blue-500 sm:text-4xl">
        {stat.icon}
      </div>
      <div className="text-lg font-bold sm:text-2xl">{stat.number}</div>
      <div className="text-sm sm:text-lg">{stat.label}</div>
    </div>
  );
}

export default StatisticCard;
