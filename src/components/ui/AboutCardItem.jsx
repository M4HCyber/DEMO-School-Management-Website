function AboutCardItem({ about }) {
  return (
    <div className="flex flex-col items-center gap-2 space-y-3 px-8 py-7 text-center shadow-lg hover:shadow-xl">
      <div
        className={`${about.bgcolor} ${about.txtcolor} w-fit rounded-xl px-4 py-3 text-2xl`}
      >
        {about.icon}
      </div>
      <span className="text-[1.3rem] font-semibold">{about.title}</span>
      <p>{about.description}</p>
    </div>
  );
}

export default AboutCardItem;
