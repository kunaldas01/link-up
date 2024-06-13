import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-9 h-9", // Custom width and height
      userButtonPopoverCard: "border-white",
    },
  };

  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="linkUp logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Link Up
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={userButtonAppearance}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
