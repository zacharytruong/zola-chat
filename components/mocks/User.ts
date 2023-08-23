interface Auth0UserProps {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sid: string;
  sub: string;
  updated_at: string;
}

const BetaTesterUser: Auth0UserProps = {
  email: 'betatester01@gmail.com',
  email_verified: false,
  name: 'betatester01@gmail.com',
  nickname: 'betatester01',
  picture:
    'https://s.gravatar.com/avatar/047c87cb581bafde96dd2c77aa74badf?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbe.png',
  sid: 'oKW_BAKZERK1gT-npifylbDpm_t14U-9',
  sub: 'auth0|64e4f519ef2059e5d69fd6a3',
  updated_at: '2023-08-22T17:49:14.000Z'
};

export { type Auth0UserProps, BetaTesterUser };
