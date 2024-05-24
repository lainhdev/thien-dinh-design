import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo-full.svg" width={300} height={40} alt="logo" />
      </Link>
      {/* <p className="text-xs text-neutral-500 dark:text-neutral-400">
        © 2024 Acme Inc. All rights reserved.
      </p> */}
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};
