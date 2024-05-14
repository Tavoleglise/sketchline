import { FC } from "react";
import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const MenuSection: FC = () => {
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Explore
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          About Us
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default MenuSection;
