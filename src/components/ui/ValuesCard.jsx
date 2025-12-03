function ValuesCard({ value }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-10 text-center hover:shadow-sm">
      <div className="rounded-2xl bg-blue-100 px-3 py-2 text-2xl text-blue-600">
        {value.icon}
      </div>
      <span className="text-lg font-semibold">{value.title}</span>
      <p>{value.description}</p>
    </div>
  );
}

export default ValuesCard;
