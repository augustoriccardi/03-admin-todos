"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SideBarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();

  return (
    <>
      <li>
        <Link
          href={path}
          className={`outline-none border border-gray-300 focus:border-cyan-300 transition px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group-hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
        ${
          path === pathName
            ? " text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }
        `}
        >
          {icon}
          <span className="-mr-1 font-medium group-hover:text-white-700">
            {title}
          </span>
        </Link>
      </li>
    </>
  );
};