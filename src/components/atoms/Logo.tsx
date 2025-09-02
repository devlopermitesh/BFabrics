import Image from "next/image";
import LogoSrc from "@/assets/Logo.png";

interface LogoProps {
  size?: "small" | "middle" | "large";
  showImg?: boolean;
  showText?: boolean;
}

const sizeMap = {
  small: 40,
  middle: 80,
  large: 120,
};

const Logo: React.FC<LogoProps> = ({
  showImg = true,
  showText = true,
  size = "middle",
}) => {
  const dimension = sizeMap[size];

  return (
    <div className="flex items-center gap-2">
      {showImg && (
        <Image
          src={LogoSrc}
          alt="Logo"
          width={dimension}
          height={dimension}
          className="rounded object-cover"
        />
      )}
      {showText && (
        <span className="text-xl font-primary text-white ">B FASHION</span>
      )}
    </div>
  );
};

export default Logo;
