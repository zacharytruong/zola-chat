'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const User = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div>No user</div>;
  return <div>{user.sub}</div>;
};

export default User;
