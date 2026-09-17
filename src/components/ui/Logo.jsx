import logoImage from "../../assets/brand/logo1.png"

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center w-48"
    >
      <img
        src={logoImage}
        alt="IPO Ledger"
        className="w-full h-auto object-contain"
      />
    </a>
  );
}

export default Logo;