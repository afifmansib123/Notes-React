
// components/Navbar.js

import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Add your logo here */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-13 object-contain"
          />
          <p className="text-orange-500 text-lg font-bold ml-5">G</p>
          <p className="text-white text-lg font-bold ml-1">POS</p>
        </div>
        {/* Add your navigation links here */}
        <div className="space-x-4">
          <Link href="#contact-form-section">
            <button
              className="flex justify-center items-center rounded-2xl p-4 text-white"
              style={{ backgroundColor: "#f47322" }}
              type="button"
            >
              ติดต่อพนักงานขาย
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
