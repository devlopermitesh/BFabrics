import { useNavlinks } from "@/hooks/useRoutes";
import Navlink from "../atoms/Navlink";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import GetIcon from "@/utils/getIcon";
import { useState } from "react";
import MenuButton from "../atoms/MenuButton";
import MobileMenuBar from "./MobileMenuBar";

const Navbar = () => {
  const navLinks = useNavlinks();
 const [MobileMenuOpen,setMobileMenuOpen]=useState(false)
  return (
    <nav className="flex items-center justify-between w-full h-24 px-6 bg-[var(--background)]">
      {/* Left: Links */}
      <div className=" items-center gap-6 hidden md:flex">
        {navLinks.map((item) => (
          <Navlink
            key={item.label}
            link={item.href}
            name={item.label}
            active={item.active}
          />
        ))}
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center items-center">
        <Logo size="small" />
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-4">
        <Button className="bg-lightdark ">
          <GetIcon name="cart" className="text-white hover:text-white" />
        </Button>
        <Button className=" bg-sand  text-black hover:bg-[#8d7d6a] hover:text-white font-semibold
        font-primary cursor-pointer hidden  md:flex">
          Contact
        </Button>
{/* //Menubar button  */}

<MenuButton MenuVisible={MobileMenuOpen} onClick={setMobileMenuOpen}/>
{
    MobileMenuOpen &&
    (
<MobileMenuBar MenuVisible={MobileMenuOpen} onClick={setMobileMenuOpen}/>
    )
}

      </div>


    </nav>
  );
};

export default Navbar;
