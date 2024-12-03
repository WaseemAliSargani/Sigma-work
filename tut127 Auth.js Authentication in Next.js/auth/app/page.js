"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button className="bg-red-700" onClick={() => signOut()}>Sign out</button> <br /> <br />
      <button className="bg-red-700" onClick={() => signOut("facebook")}>Sign out facebook </button> <br /> <br />
      {/* <button className="bg-red-700" onClick={() => signOut("google")}>Sign out google </button> */}
    </>
  }
  return <>
    Not signed in <br/>
    <button className="bg-blue-700" onClick={() => signIn()}>Sign in Github </button> <br /> <br />
    <button className="bg-blue-700" onClick={() => signIn()}>Sign in facebook </button> <br /> <br />
    {/* <button className="bg-blue-700" onClick={() => signIn("google")}>Sign in google</button> */}
  </>
}