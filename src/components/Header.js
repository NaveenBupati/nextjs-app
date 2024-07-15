import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-2.5 self-stretch bg-white-a700 border-t border-b">
      <div className="container-xs mt-3 flex justify-end items-center px-1.5 md:p-5 w-full">
        <ul className="flex gap-10">
          <li>
            <Link href="#">
              <p className="text-xs text-gray-800">Return</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="text-xs text-gray-800">Help</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="text-xs text-gray-800">Register/Signin</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
