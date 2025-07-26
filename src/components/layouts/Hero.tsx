import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div>
        <Image src="/hero.svg" width={928} height={480} alt="Hero image" />
      </div>
      <div className="flex flex-col items-center space-y-4 absolute inset-0 top-65">
        <p className="text-white font-bold text-5xl">
          Get AI-Powered Portfolio Feedback
        </p>
        <p className="text-white text-center w-[850px] ">
          Upload your portfolio and receive instant, actionable feedback from
          our AI. Improve your portfolio's impact and land your dream job.
        </p>
        <Button>Upload Portfolio</Button>
      </div>
    </div>
  );
};

export default Hero;
