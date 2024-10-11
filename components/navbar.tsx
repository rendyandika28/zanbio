"use client";

import { Button } from "@nextui-org/button";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Tab, Tabs } from "@nextui-org/tabs";
import { default as Link, default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import useMenuStore from "@/store/use-menu-store";
import styles from "@/styles/style.module.scss";

export const Navbar = () => {
  const pathname = usePathname();
  const activeMenu = useMenuStore((state) => state.activeMenu);
  const setActiveMenu = useMenuStore((state) => state.setActiveMenu);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChangeMenu = (key: React.Key) => {
    const y =
      document.getElementById(key)?.getBoundingClientRect().top +
      window.scrollY;

    window.scroll({
      top: y - 80,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
    setActiveMenu(key as string);
  };

  if (pathname !== "/") {
    return (
      <NextUINavbar className="border-b py-2" maxWidth="xl" position="sticky">
        <NavbarContent justify="start">
          <NavbarBrand>
            <NextLink href="/">
              <Logo customClass="w-36 lg:w-full" />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
      </NextUINavbar>
    );
  }

  return (
    <NextUINavbar
      className="border-b py-2 bg-white"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <Logo customClass="w-36 lg:w-full" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem className="hidden lg:flex">
          <Tabs
            key={"tabs-menu"}
            aria-label="Tabs sizes"
            className="gap-0"
            selectedKey={activeMenu}
            size={"lg"}
            onSelectionChange={onChangeMenu}
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
            className="bg-brand text-white h-[46px] text-sm px-[30px]"
            href="/sales-team"
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
        <div className="flex flex-col justify-between h-dvh py-5 gap-4">
          <Listbox aria-label="Listbox menu with icons" variant="faded">
            {siteConfig.navItems.map((item) => (
              <ListboxItem
                key={item.href}
                onClick={() => onChangeMenu(item.href)}
              >
                {item.label}
              </ListboxItem>
            ))}
          </Listbox>
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
