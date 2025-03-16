"use client";
import {ClientForm} from "../components/ClientForm"
import { signIn, signOut, useSession } from "next-auth/react";
import { Background } from "../components/Background";

export default function Register() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <Background />
      <section className="">
        {!session ? (
          <>
            <div className="grid justify-center p-60 gap-7 ">
              <div className="flex justify-center text-xl">Welcome </div>
              <div className="flex gap-3 border p-4 rounded-2xl">
                <img
                  className="h-6  "
                  src="/google.webp"
                  alt="Logo"
                />
                <button className="text-xl" onClick={() => signIn("google")}>
                  Continue with Google
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between ">
              <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
                .poppins {
                  font-family: "Poppins", sans-serif;
                  font-weight: 400;
                  font-style: normal;
                }
              `}</style>
              <div className="pt-10 pl-10">
                <img src="/ccc.png" alt="Logo" width="100" height="100" />
              </div>
              <div className="flex  p-2">
                <div className="p-7 ">
                  <div className="flex pt-2 ">
                    <div className="Poppins">{session.user.name}</div>
                    <button
                      className="pl-9 cursor-pointer"
                      onClick={() => signOut()}
                    >
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
            <div className="Poppins justify-normal flex pt-10 p-10 pl-35  opacity-70 text-2xl sm:text-sm md:text-xl lg:text-2xl font-semibold z-10 tracking-tight ">
              Welcome,<div className="pl-3">{session.user.name}</div>
            </div>
            <ClientForm />
          </>
        )}
      </section>
    </div>
  );
}
