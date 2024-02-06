import React from "react";
import Whatsapp from "../../public/logo/Digital_Inline_White.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/+96897228463">
      <Button className="bg-[#075E54] py-6 rounded-full gap-1 flex">
        <Image
          src={Whatsapp.src}
          width={100}
          height={100}
          alt="whatsapp-logo"
        />{" "}
        <span className="font-bold">Us</span>
      </Button>
    </Link>
  );
};

export default WhatsAppButton;
