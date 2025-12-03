import Input from "./Input";
import Button from "./Button";

function SendMessage() {
  return (
    <div className="flex h-fit flex-col gap-5 rounded-xl px-7 py-7 shadow-lg">
      <h3>Send us a Message</h3>
      <div className="grid grid-cols-2 gap-5">
        <Input type="text" placeholder="Your full Name" label="Full Name" />
        <Input
          type="email"
          placeholder="your.email@example.com"
          label="Email"
        />
      </div>
      <Input
        type="text"
        placeholder="What is this regarding?"
        label="Subject"
      />
      <Input
        type="message-area"
        label="Message"
        placeholder="Please share your message or inquire.."
      />
      <Button style="text-white text-center bg-blue-900">Send Message</Button>
    </div>
  );
}

export default SendMessage;
