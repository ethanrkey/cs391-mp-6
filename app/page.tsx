'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-6">
        <p>Welcome, {session.user?.name}!</p>
        <img src={session.user?.image ?? ''} alt="profile pic" width={50} />
        <p>Email: {session.user?.email}</p>
        <button onClick={() => signOut()} className="mt-2 underline">Sign out</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <p>You are not signed in</p>
      <button onClick={() => signIn('github')} className="underline">Sign in with GitHub</button>
    </div>
  );
}
