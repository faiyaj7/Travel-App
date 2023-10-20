"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
// import { motion } from "framer-motion";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Menu/Nav";
import { MenuToggle } from "./Menu/Toggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/BhromonKori.png"} alt="logo" width={100} height={70} />
      </Link>

      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          label="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
      >
        <motion.div className="navbar" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
