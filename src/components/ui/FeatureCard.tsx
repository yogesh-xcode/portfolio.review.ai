import Image from "next/image";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconAlt,
  headline,
  context,
}) => {
  return (
    <div className="px-2 pr-8 mt-8  w-96 border-primary-gray rounded-xl  flex flex-col justify-around  space-y-2 ml-1">
      <Image src={icon} alt={iconAlt} width={30} height={30} />
      <p className="font-bold text-lg">{headline}</p>
      <p className="text-primary-gray">{context}</p>
    </div>
  );
};

export default FeatureCard;
