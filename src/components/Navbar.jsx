import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">NEXT MYSQL CRUD</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
