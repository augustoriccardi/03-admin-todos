"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Client Side");
  }, []);

  return (
    <div>
      <div className="flex flex-col dark:text-white">
        <span>{session?.user?.name ?? "No name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Image"}</span>
        <span>{session?.user?.roles?.join(", ") ?? ["No roles"]}</span>
      </div>
    </div>
  );
}
