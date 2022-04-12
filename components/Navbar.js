import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>nemoo</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/nemo">
        <a>nemo list</a>
      </Link>
    </nav>
  );
}

export default Navbar;
