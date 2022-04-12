import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="memorize.PNG" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/nemo">
        <a>nemo-list</a>
      </Link>
    </nav>
  );
}

export default Navbar;
