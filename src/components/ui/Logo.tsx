import Image from "next/image";
const Logo = () => {
  return (
    <>
      <Image src="/logo.svg" width={190} height={25} alt="Logo" />
    </>
  );
};

export default Logo;
