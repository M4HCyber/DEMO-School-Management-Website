import ContactUs from "../components/ui/ContactUs";
import FindUs from "../components/ui/FindUs";
import SendMessage from "../components/ui/SendMessage";

function Contact() {
  return (
    <div>
      <section>
        <div className="bg-blue-600 bg-linear-to-r from-blue-500 to-cyan-500 p-20 text-center text-gray-100">
          <div className="m-auto w-[70%] space-y-5">
            <h1 className="font-extrabold">Contact Us</h1>
            <p className="text-2xl">
              We&apos;d love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-10 px-20 py-15">
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
