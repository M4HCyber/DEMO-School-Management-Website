import Button from "./Button";

function Buttons() {
  return (
    <div className="space-x-3">
      <Button to="/login">Login</Button>
      <Button to="/login" style="text-gray-100 bg-blue-900">
        SignUp
      </Button>
    </div>
  );
}

export default Buttons;
