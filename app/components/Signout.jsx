"use client";
import { ClientForm } from "../components/ClientForm";
import { signIn, signOut, useSession } from "next-auth/react";

export function Signout() {
    const { data: session } = useSession();
    console.log(session);
  return (
    <div>
      <div className="flex justify-between ">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
          .poppins {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
        <div className="pt-12 pl-10">
          <img src="/ccc.png" alt="Logo" width="100" height="100" />
        </div>
        <div className="flex pr-290 pt-15  opacity-70 text-2xl sm:text-sm md:text-xl lg:text-2xl font-semibold z-10 tracking-tight ">
          Welcome,<div className="pl-3 w-max">{session.user.name}</div>
        </div>
        <div className="flex  p-2">
          <div className="p-7 ">
            <div className="flex pt-2 ">
              <div className="Poppins">{session.user.name}</div>
              <button className="pl-9 cursor-pointer" onClick={() => signOut()}>
                {" "}
                <img
                  className="  "
                  src="/logout.png"
                  alt="Logo"
                  width="20"
                  height="20"
                />
              </button>
            </div>
            <div className="Poppins text-sm opacity-65">
              {" "}
              {session.user.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
