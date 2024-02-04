// "use client"

import { getCookie, hasCookie, setCookie } from "cookies-next";

/*
cookie: cart
{
    "uui-123-1":4,
     "uui-123-1":1,
      "uui-123-1":2,
}
*/

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
    return cookieCart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] = cookieCart[id] + 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};