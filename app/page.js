"use client"
import {HomePage} from "./home/page";
import { connectDB} from "../utils/database"
import { signIn, signOut, useSession} from 'next-auth/react'

export default function Home() {
  const db = connectDB()
  return (
    <div>
      <HomePage />
      <section className="flex justify-center">
        <h1>signin eiht g</h1>
        <button onClick={() => signIn('google')}>signin</button>
      </section>
    </div>
  );
}
