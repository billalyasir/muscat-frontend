import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-6 px-3 text-center bg-black text-white">
      <div className="flex items-center contents-center justify-center gap-4">
        <Link href="/">
          <Facebook />
        </Link>
        <Link href="/">
          <Instagram />
        </Link>
        <Link href="/">
          <Youtube />
        </Link>
      </div>
      <p className="mt-2">
        {" "}
        Copyright © 2024 - All right reserved by Muscatclean
      </p>
    </div>
  );
};

export default Footer;
