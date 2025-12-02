function Logo() {
  const logoUrl = "/images/logo-preview.png";
  return (
    <div className="font- flex items-center gap-3">
      <img src={logoUrl} alt="Demo Logo" className="h-[50px] w-[50px]" />
      <h1 className="text-lg font-bold">DEMO Academy, Azare</h1>
    </div>
  );
}

export default Logo;
