import { useSession } from "next-auth/react";

export function Gmail() {
  const { data: session } = useSession();
  console.log(session);

  return <div>{!session ? <> </> : <div>{session.user.email}</div>}</div>;
}
