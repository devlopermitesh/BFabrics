import { Dispatch, SetStateAction } from "react";

interface MenuButtonProps {
  MenuVisible: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({ MenuVisible, onClick }) => {
  return (
    <button
      onClick={() => onClick((prev) => !prev)}
      className="relative w-10 h-10 flex flex-col justify-center items-center gap-1  transition-colors duration-300 rounded-md md:hidden"
      style={{ backgroundColor: "var(--color-sand)" }} // button background
    >
      {/* Top span - long */}
      <span
        className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ease-in-out
          ${MenuVisible ? "rotate-45 translate-y-2.5" : ""}`}
      />
      {/* Middle span - medium */}
      <span
        className={`block h-0.5 w-7 bg-black rounded transition-all duration-300 ease-in-out
          ${MenuVisible ? "opacity-0" : "opacity-100"}`}
      />
      {/* Bottom span - short */}
      <span
        className={`block h-0.5 w-4 bg-black rounded transition-all duration-300 ease-in-out
          ${MenuVisible ? "-rotate-45 -translate-y-2.5" : ""}`}
      />
    </button>
  );
};

export default MenuButton;
