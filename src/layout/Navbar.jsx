import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
  ButtonGroup,
  Button,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import str, { Strings } from "../translations/localization";

const navListItems = [
  {
    label: str.navbar.blog,
    icon: Square3Stack3DIcon,
  },
  {
    label: str.navbar.steam,
    icon: CubeTransparentIcon,
  },
  {
    label: str.navbar.account,
    icon: UserCircleIcon,
  },
];
function NavList() {
  const handleChange = (e) => {
    const newLanguage = e.target.value;
    Strings.setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
    window.location.reload();
  };
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <ButtonGroup size="sm" onClick={handleChange}>
        <Button value="fa">fa</Button>
        <Button value="en">en</Button>
      </ButtonGroup>
      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-white"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function AppNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth
      className={`mx-auto p-2 lg:pl-6 w-full z-10 absolute ${
        window.location.pathname === "/" ? "bg-transparent" : "bg-blue-900"
      } overflow-hidden`}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-white font-bold text-xl"
        >
          Adrina
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>

      <MobileNav open={isNavOpen}>
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
