"use client";
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Background } from "../components/Background";
import { Loading } from "../components/Loading";
import { ClientForm } from "../components/ClientForm";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to /dashboard when authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div>
      <Background />
      <section className="flex justify-center items-center h-screen">
        {!session ? (
          <div className="grid justify-center p-10 gap-7 text-center">
            <div className="text-xl">Welcome</div>
            <div className="flex gap-3 border p-4 rounded-2xl cursor-pointer" onClick={() => signIn("google")}>
              <img className="h-6" src="/google.webp" alt="Google Logo" />
              <button className="text-xl">Continue with Google</button>
            </div>
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </section>
    </div>
  );
}
