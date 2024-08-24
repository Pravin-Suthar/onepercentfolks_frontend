import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import style from "./../styles/navbar.module.css";

import { siteConfig } from "@/config/site";
import { SearchIcon, Logo } from "@/components/icons";
import { ThemeSwitch } from "./theme-switch";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const Navbar = () => {
  return (
    <div className={style.nav_main_container}>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">1% Folks</p>
            </NextLink>
          </NavbarBrand>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  // endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Traders Corner
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Dynamic Actions"
              items={siteConfig.navMenuTradersCornerItems}
            >
              {(item) => (
                <DropdownItem
                  href={item.href}
                  key={item.label}
                  color={item.label === "delete" ? "danger" : "default"}
                  className={item.label === "delete" ? "text-danger" : ""}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  // endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Investors Corner
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Dynamic Actions"
              items={siteConfig.returnCalculatorTools}
            >
              {(item) => (
                <DropdownItem
                  href={item.href}
                  key={item.label}
                  color={item.label === "delete" ? "danger" : "default"}
                  className={item.label === "delete" ? "text-danger" : ""}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <div className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent className="mg:hidden basis-1 pl-4" justify="end">
          <div className="sm:flex justify-end">
            <NextLink href={siteConfig.loginSigninSignup[1]["href"]}>
              <Button size="sm">Sign In</Button>
            </NextLink>
          </div>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};
