'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-6 flex flex-col">
        <h1 className="text-4xl pb-10 text-center">Hey!</h1>
        <div className="flex flex-col gap-3 border-2 rounded-2xl p-8 m-8 bg-[#27465c]">
          <p>Welcome, {session.user?.name}!</p>
          <img src={session.user?.image ?? ''} alt="profile pic" width={50} />
          <p>Email: {session.user?.email}</p>
          <button onClick={() => signOut()} className="mt-2 underline">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl pb-10 text-center">CS391 MP6</h1>
      <div className="flex flex-col gap-3 border-2 rounded-2xl p-8 m-8 bg-[#27465c]">
        <p>You are not signed in</p>
        <button onClick={() => signIn('github')} className="underline">Sign in with GitHub</button>
      </div>
    </div>
  );
}
