'use client';

import CustomLoading from '@/components/CustomLoading';
import GroupCard from '@/components/GroupCard';
import { Groups } from '@/components/mocks/Groups';
import { GroupsProps } from '@/types/interfaces';
import { useUser } from '@auth0/nextjs-auth0/client';
import _ from 'lodash';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [groups, setGroups] = useState<GroupsProps[]>([]);

  useEffect(() => {
    setGroups(Groups);
  }, []);

  // if (_.isEmpty(user)) {
  //   redirect('/api/auth/login');
  // }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <CustomLoading />
      </div>
    );
  }
  if (!_.isNil(error) && !error) {
    return <div>An error occurred. Please try again later.</div>;
  }

  return (
    <>
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </>
  );
}
