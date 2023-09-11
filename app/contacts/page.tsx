'use client';

import ContactCard from '@/components/ContactCard';
import { Contacts } from '@/components/mocks/User';
import { Auth0UserProps } from '@/types/interfaces';
import { useEffect, useState } from 'react';

const ContactPage = () => {
  const [contacts, setContacts] = useState<Auth0UserProps[]>([]);

  useEffect(() => {
    setContacts(Contacts);
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard key={contact.sub} contact={contact} />
      ))}
    </>
  );
};

export default ContactPage;
