interface BaseClass {
  children?: React.ReactNode;
  className?: string;
}

interface ButtonProps extends BaseClass {}
interface FeatureCardProps extends BaseClass {
  icon: string;
  iconAlt: string;
  headline: string;
  context: string;
}
