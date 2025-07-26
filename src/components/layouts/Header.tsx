import Logo from "@/components/ui/Logo";
import NavBar from "@/components/ui/NavBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
