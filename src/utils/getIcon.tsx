import {
  ArrowRight,
  Instagram,
  Phone,
  ShoppingCart,
  TrendingUp,
  Image,
  FilePlay,
  X,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export type IconName =
  | "cart"
  | "X"
  | "Arrowout"
  | "Instagram"
  | "Phone"
  | "ArrowRight"
  | "Image"
  | "FilePlay";

export interface IconsProps {
  name: IconName;
  className?: string;
  onClick?: () => void;
}

const GetIcon: React.FC<IconsProps> = ({ name, className, onClick }) => {
  switch (name) {
    case "cart":
      return (
        <ShoppingCart
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "X":
      return (
        <X name={name} onClick={onClick} className={twMerge("", className)} />
      );
    case "Arrowout":
      return (
        <TrendingUp
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "Instagram":
      return (
        <Instagram
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "Phone":
      return (
        <Phone
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "ArrowRight":
      return (
        <ArrowRight
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "Image":
      return (
        <Image
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    case "FilePlay":
      return (
        <FilePlay
          name={name}
          onClick={onClick}
          className={twMerge("", className)}
        />
      );
    default:
      return null;
  }
};

export default GetIcon;
