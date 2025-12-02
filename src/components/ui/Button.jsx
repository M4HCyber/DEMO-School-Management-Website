import { Link } from "react-router-dom";

function Button({ bg }) {
  const style = "py-2 px-4";
  if (bg) return <Link className={`${bg} ${style}`}></Link>;
  return <div></div>;
}

export default Button;
