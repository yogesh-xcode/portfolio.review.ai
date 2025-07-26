import Button from "@/components/ui/Button";

const NavBar = () => {
  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
  ];
  return (
    <>
      <ul className="flex items-center space-x-5">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="font-normal text-lg">
              {link.name}
            </a>
          </li>
        ))}
        <Button>Upload Portfolio</Button>
      </ul>
    </>
  );
};

export default NavBar;
