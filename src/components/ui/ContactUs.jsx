import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import ContactCard from "./ContactCard";

function ContactUs() {
  const contactInfo = [
    {
      icon: <HiOutlineLocationMarker />,
      bgcolor: "bg-blue-100",
      txtcolor: "text-blue-600",
      title: "Address",
      description:
        "Maiduguri Road, \n Adjacent to FUHSATH, \n Azare Bauchi State, \n Nigeria.",
    },
    {
      icon: <HiOutlinePhone />,
      bgcolor: "bg-green-100",
      txtcolor: "text-green-600",
      title: "Phone",
      description:
        "Main Office: +234 (8135) 080-092. \n Admissions: +234 (8135) 080-092.",
    },
    {
      icon: <HiOutlineEnvelope />,
      bgcolor: "bg-purple-100",
      txtcolor: "text-purple-600",
      title: "Email",
      description:
        "General: info@demoacademy.edu \n Admissions: admissions@demoacademy.edu",
    },
    {
      icon: <HiOutlineClock />,
      bgcolor: "bg-orange-100",
      txtcolor: "text-orange-600",
      title: "Office Hours",
      description: "Monday - Friday: 7:30AM - 5:00 PM",
    },
  ];
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <h2>Get In Touch</h2>
        <p>
          Have questions about admissions, academics, or want to schedule a
          visit? We&apos;re here to help and would love to connect with you.
        </p>
      </div>
      <div className="flex flex-col">
        {contactInfo.map((contact) => (
          <ContactCard contact={contact} key={contact.title} />
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
