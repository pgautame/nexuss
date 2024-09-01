import SearchInput from "@/components/search-input";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import HeaderAuth from "@/components/header-auth";
import { Suspense } from "react";

export default function Header() {
  HeaderAuth;

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold text-xl">
          Nexuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="w-1/2 h-5 mx-auto">
        <NavbarItem className="w-full">
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
