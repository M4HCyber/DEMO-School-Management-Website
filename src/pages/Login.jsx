import { HiOutlineUser } from "react-icons/hi";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="rounded-2xl bg-gray-100 py-20">
      <div className="m-auto w-100 rounded-xl bg-white px-10 py-15 shadow-xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-fit rounded-full bg-blue-500 px-3 py-3 text-2xl text-white">
            <HiOutlineUser />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>
        <form action="">
          <span>Login</span>
          <div>
            <Input
              type="text"
              placeholder="Enter your registraion number"
              label="Reg No"
            />
            <Input
              type="text"
              placeholder="Enter your password"
              label="Password"
            />
          </div>
          <Link>Forgot Password?</Link>
          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
