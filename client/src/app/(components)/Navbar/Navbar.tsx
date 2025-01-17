'use client';
import { Menu } from 'lucide-react';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups and products"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
