"use server";

import { cookies } from "next/headers";
import { ThemeSwitcher } from "@/app/ThemeSwitcher";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

export const TopMenu = () => {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

  const getTotalCount = () => {
    let items = 0;

    // Funcion de javascript para obtener el valor de los
    Object.values(cart).forEach((value) => {
      items += value as number;
    });

    return items;
  };

  return (
    <div className=" dark:bg-gray-900 sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <ThemeSwitcher />
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition dark:bg-gray-800"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden  text-gray-600 dark:text-white dark:bg-gray-800 ">
            <CiSearch size={20} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200  text-gray-600 dark:text-white dark:bg-gray-800">
            <CiChat1 size={25} />
          </button>
          <button className=" p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200  text-gray-600 dark:text-white dark:bg-gray-800  border-gray-300">
            <span className="text-sm mr-2 font-bold">{getTotalCount()}</span>
            <CiShoppingBasket size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
