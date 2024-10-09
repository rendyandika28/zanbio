"use client";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Tab, Tabs } from "@nextui-org/tabs";
import NextLink from "next/link";

import styles from "@/styles/style.module.scss";
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar className="border-b py-2" maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand as="li">
          <NextLink href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem className="hidden md:flex">
          <Tabs
            key={"tabs-menu"}
            aria-label="Tabs sizes"
            className="gap-0"
            size={"lg"}
          >
            {siteConfig.navItems.map((item) => (
              <Tab key={item.href} className="px-10" title={item.label} />
            ))}
          </Tabs>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className={`${styles.button_primary} h-[46px]`}
            style={{ fontSize: "14px" }}
            variant="flat"
          >
            Talk to Sales
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href="#" size="md">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
