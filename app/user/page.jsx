"use client";


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
            <h1></h1>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between ">
              <div className="p-15 mt-6 text-2xl sm:text-sm md:text-xl lg:text-2xl font-semibold mx-auto text-center z-10 tracking-tight pb-0">Dashboard</div>
              <div className="flex  p-2">
                <div className="p-7 border rounded-4xl ">
                  <div className=""> {session.user.email}</div>
                  <div className="flex pt-2">
                    <div className=" text-sm ">{session.user.name}</div>
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
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
