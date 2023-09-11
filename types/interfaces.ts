import { StaticImageData } from 'next/image';
import { DefaultTheme } from 'styled-components';

interface ThemeProps extends DefaultTheme {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  accent: string;
}

interface Auth0UserProps {
  email?: string;
  email_verified?: boolean;
  name?: string;
  nickname?: string;
  picture?: string;
  sid?: string;
  sub?: string;
  updated_at?: string;
}

interface GroupsProps {
  id: string;
  contacts: Auth0UserProps[];
  avatar?: StaticImageData;
  groupName?: string;
  lastUpdatedTime?: string;
}

export type { ThemeProps, Auth0UserProps, GroupsProps };
