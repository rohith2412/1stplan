"use client";
import { ClientForm } from "../components/ClientForm";
import { signIn, signOut, useSession } from "next-auth/react";
import { Background } from "../components/Background";
import { Signout } from "../components/Signout";
import { Activities } from "../components/Activities";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <Background />
      {!session ? null : (
        <div>
          <Signout />

          <div className="pl-55 pt-15">
            <div className="pb-20">
              <Link href="/post">
                <button className=" blue_gradient cursor-pointer pl-3 pt-1 pb-1 text-white pr-4.5 rounded">
                  + POST
                </button>
              </Link>
            </div>
            <Activities />
          </div>
        </div>
      )}
    </div>
  );
}
