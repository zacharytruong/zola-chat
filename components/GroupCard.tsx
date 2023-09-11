import { GroupsProps } from '@/types/interfaces';
import Image from 'next/image';
import groupAvatar from '@/assets/images/group-avatar.jpeg';
import dayjs from 'dayjs';

const GroupCard = ({ group }: { group: GroupsProps }) => {
  return (
    <div className="flex items-center p-8 border-b-2">
      <div className="flex items-center flex-grow">
        {group.avatar ? (
          <Image
            src={group.avatar}
            alt="group-avatar"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-full"
          />
        ) : (
          <Image
            src={groupAvatar}
            alt="group-avatar"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-full"
          />
        )}
        <h2 className="m-4">{group.groupName}</h2>
      </div>
      <div>
        <p>{dayjs(group.lastUpdatedTime).format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
};

export default GroupCard;
