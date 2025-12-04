function ValueCard({ value }) {
  return (
    <div className="flex flex-col items-center justify-center border-r border-white text-center">
      <div className="px-5">
        <span className="text-3xl sm:text-5xl">{value.icon}</span>
      </div>
      <span>{value.title}</span>
    </div>
  );
}

export default ValueCard;
