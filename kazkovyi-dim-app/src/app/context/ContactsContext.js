"use client";

import { createContext, useContext } from "react";

const ContactsContext = createContext(null);

export function ContactsProvider({ contacts, children }) {
  return <ContactsContext.Provider value={contacts}>{children}</ContactsContext.Provider>;
}

export function useContacts() {
  return useContext(ContactsContext);
}
