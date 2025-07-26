import { cn } from "@/lib/utils";
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className={cn(`w-35 p-2 bg-primary-blue text-white rounded-lg `)}>
        {children}
      </button>
    </>
  );
};

export default Button;
