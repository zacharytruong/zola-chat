import Image from 'next/image';

import { BsTelephone } from 'react-icons/bs';
import userPlaceholder from '@/assets/images/user-placeholder.png';
import { Auth0UserProps } from '@/types/interfaces';

const ContactCard = ({ contact }: { contact: Auth0UserProps }) => {
  return (
    <div className="flex items-center p-8 border-b-2">
      <div className="flex items-center flex-1">
        <Image
          src={userPlaceholder}
          width={100}
          height={100}
          alt="contact avatar"
        />{' '}
        <p className="m-4">{contact.name ? contact.name : 'Loading...'}</p>
      </div>
      <BsTelephone size={30} />
    </div>
  );
};

export default ContactCard;
