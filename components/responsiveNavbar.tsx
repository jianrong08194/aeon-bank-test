"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link
} from "@nextui-org/react";


export const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Showcase",
    "Docs",
    "Blog",
    "Analytics",
    "Templates",
    "Enterprise",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {isMenuOpen && (
          <NavbarItem className="flex sm:hidden">
            <input
              type="text"
              placeholder="Sesarch..."
              className=" px-4 py-2 border rounded-md sm:hidden"
            />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 content-start" justify="center">
        <NavbarItem>
          <NavbarBrand>
            Aeon
          </NavbarBrand>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarItem key={item}>
            <Link
              color="foreground"
              href="#"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="content-end hidden sm:flex" justify="end">
        <NavbarItem>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <Button color="primary" onPress={() => setIsMenuOpen(false)}>Login</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            AEON
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link color="foreground" href="/login" onPress={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
