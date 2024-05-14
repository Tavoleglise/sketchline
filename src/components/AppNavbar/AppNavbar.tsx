import { FC } from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Logo from "../../common/Logo";
import { ProfileSection } from "./ProfileSection";
import MenuSection from "./MenuSection";

const AppNavbar: FC = () => {
  return (
    <Navbar shouldHideOnScroll className=" text-white">
      <NavbarBrand>
        <Logo className="w-16" />
      </NavbarBrand>
      <MenuSection />
      <ProfileSection />
    </Navbar>
  );
};

export default AppNavbar;
