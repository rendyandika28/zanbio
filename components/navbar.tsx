"use client";

import { Button } from "@nextui-org/button";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Tab, Tabs } from "@nextui-org/tabs";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import styles from "@/styles/style.module.scss";


export const Navbar = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return (
      <NextUINavbar className="border-b py-2" maxWidth="xl" position="sticky">
        <NavbarContent justify="start">
          <NavbarBrand>
            <NextLink href="/">
              <Logo customClass="w-36 lg:w-full"/>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
      </NextUINavbar>
    );
  }

  return (
    <NextUINavbar className="border-b py-2" maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <Logo customClass="w-36 lg:w-full"/>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem className="hidden lg:flex">
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

      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className={`${styles.button_primary} h-[46px]`}
            href="/sales-team"
            style={{ fontSize: "14px" }}
            variant="flat"
          >
            Talk to Sales
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col justify-between h-dvh py-5 gap-4">
          <div>
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color="foreground" href="#">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
          <Button
            as={Link}
            className={`${styles.button_primary} h-[46px]`}
            href="/sales-team"
            style={{ fontSize: "14px" }}
            variant="flat"
          >
            Talk to Sales
          </Button>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
