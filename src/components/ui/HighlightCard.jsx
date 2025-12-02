function HighlightCard({ highlight }) {
  const { icon, title, bgcolor, txtcolor, description } = highlight;
  return (
    <div className="space-y-3 px-8 py-5 shadow-lg hover:shadow-xl">
      <div
        className={`${bgcolor} ${txtcolor} w-fit rounded-xl px-4 py-3 text-2xl`}
      >
        {icon}
      </div>
      <h3 className="text-[1.3rem] font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HighlightCard;
