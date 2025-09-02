import { Dispatch, SetStateAction } from "react";
import { useNavlinks } from "@/hooks/useRoutes";
import Navlink from "../atoms/Navlink";
import { Button } from "../ui/button";
import GetIcon from "@/utils/getIcon";

interface MobileMenuBarProps {
  MenuVisible: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuBar: React.FC<MobileMenuBarProps> = ({
  MenuVisible,
  onClick,
}) => {
  const navLinks = useNavlinks();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[var(--background)] z-50 transform transition-transform duration-300 ease-in-out
        ${MenuVisible ? "translate-y-0" : "-translate-y-full"} md:hidden`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <Button
          className="text-black bg-[var(--sandbutton)] p-2 rounded-full"
          onClick={() => onClick(false)}
        >
          <GetIcon name="X" className="w-5 h-5" />
        </Button>
      </div>

      {/* Menu links */}
      <div className="flex flex-col items-center justify-center gap-6 mt-20">
        {navLinks.map((item) => (
          <Navlink
            key={item.label}
            link={item.href}
            name={item.label}
            active={item.active}
            className="text-2xl font-semibold"
          />
        ))}

        {/* Contact button inside mobile menu */}
        <Button
          className="mt-6 bg-[var(--sandbutton)] text-black hover:bg-[#8d7d6a] font-semibold font-[var(--font-roboto)] px-6 py-2 rounded"
          onClick={() => onClick(false)}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default MobileMenuBar;
