import { Link } from "react-router-dom";

function Button({ style, children, to }) {
  if (style)
    return (
      <Link to={to} className={`rounded px-8 py-3 hover:opacity-95 ${style}`}>
        {children}
      </Link>
    );
  return (
    <Link to={to} className={`px-10 py-3 hover:opacity-95`}>
      {children}
    </Link>
  );
}

export default Button;
