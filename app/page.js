"use client"
import {HomePage} from "./home/page";
import { signIn, signOut, useSession} from 'next-auth/react'

export default function Home() {
  const { data : session} = useSession()
  console.log(session)
  return (
    <div>
      <HomePage />
      <section className="flex justify-center gap-3">
        <h1>signin with google  g</h1>
        <button onClick={() => signIn('google')}>signin</button>
        
        <button onClick={() => signOut('google')}>sign out</button>
      </section>
    </div>
  );
}
