import ContactUs from "../components/ui/ContactUs";
import FindUs from "../components/ui/FindUs";
import SendMessage from "../components/ui/SendMessage";

function Contact() {
  return (
    <div>
      <section>
        <div className="bg-blue-600 bg-linear-to-r from-blue-500 to-cyan-500 p-10 text-center text-gray-100 md:p-20">
          <div className="m-auto space-y-5 lg:w-[70%]">
            <h1 className="font-extrabold">Contact Us</h1>
            <p className="text-2xl">
              We&apos;d love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>
      <section className="grid gap-10 px-10 py-15 md:grid-cols-2 md:px-20">
        <ContactUs />
        <SendMessage />
      </section>
      <section>
        <FindUs />
      </section>
    </div>
  );
}

export default Contact;
