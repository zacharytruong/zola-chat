'use client';

import CustomLoading from '@/components/CustomLoading';
import { useUser } from '@auth0/nextjs-auth0/client';
import _ from 'lodash';
import { redirect } from 'next/navigation';
import { ImSpinner9 } from 'react-icons/im';

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return (
      <CustomLoading />
    );
  }
  if (!_.isNil(error) && !error) {
    return <div>An error occurred. Please try again later.</div>;
  }
  if (_.isEmpty(user)) {
    redirect('/api/auth/login');
  }

  return <main>Main page</main>;
}
