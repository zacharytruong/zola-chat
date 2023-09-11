import { v4 as uuidv4 } from 'uuid';
import { BetaTesterUser } from './User';
import userPlaceholder from '@/assets/images/user-placeholder.png';
import { GroupsProps } from '@/types/interfaces';
import groupAvatar from '@/assets/images/group-avatar.jpeg';

export const Group: GroupsProps = {
  id: uuidv4(),
  contacts: [BetaTesterUser],
  avatar: groupAvatar,
  groupName: 'Media Box',
  lastUpdatedTime: '2021-08-01T00:00:00.000Z'
};

export const Groups: GroupsProps[] = [
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group,
  Group
];
