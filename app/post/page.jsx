"use client";
import { ClientForm } from "../components/ClientForm";
import { signIn, signOut, useSession } from "next-auth/react";
import { Background } from "../components/Background";
import { Signout } from "../components/Signout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import Link from "next/link";

export default function Post() {
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
          <div>
            <ClientForm />
          </div>
        </div>
      )}
    </div>
  );
}
