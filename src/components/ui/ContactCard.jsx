function ContactCard({ contact }) {
  return (
    <div className="flex gap-5 border-b-1 border-gray-100 py-5">
      <div
        className={`flex h-fit w-fit items-center justify-center rounded-xl px-4 py-3 text-xl ${contact.bgcolor} ${contact.txtcolor}`}
      >
        {contact.icon}
      </div>
      <div className="flex w-83 flex-col gap-2">
        <span className="font-semibold">{contact.title}</span>
        <p>{contact.description}</p>
      </div>
    </div>
  );
}

export default ContactCard;
