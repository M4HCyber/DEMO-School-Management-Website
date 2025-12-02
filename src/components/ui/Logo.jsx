import { Link } from "react-router-dom";
function Logo({ white }) {
  const logoUrl = "/images/logo-preview.png";
  const whiteLogoUrl = "/images/logo.jpg";
  return (
    <Link to="/" className="font- flex cursor-pointer items-center gap-3">
      <img
        src={white ? whiteLogoUrl : logoUrl}
        alt="Demo Logo"
        className={`h-[50px] w-[50px] rounded-2xl`}
      />
      <h1 className="text-xl font-bold">DEMO Academy, Azare</h1>
    </Link>
  );
}

export default Logo;
