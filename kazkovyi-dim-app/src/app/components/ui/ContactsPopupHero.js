import { motion, AnimatePresence } from "motion/react";
import ContactItem from "./ContactItem";
import { useTranslation } from "react-i18next";
import { useContacts } from "@/app/context/ContactsContext";
import { contactItems } from "@/app/data/contacts";

export default function ContactsPopupHero({ isPopupHeroOpened, setIsPopupHeroOpened }) {
  const { t } = useTranslation();
  const contacts = useContacts();

  return (
    <AnimatePresence>
      {isPopupHeroOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex justify-center flex-col overflow-hidden bottom-12 md:bottom-16 rounded-2xl w-60 bg-white text-gray-500 shadow-2xl"
          onClick={() => setIsPopupHeroOpened(false)}
        >
          {contactItems.map((contact) => {
            let href = contacts?.[contact.key];

            if (contact.key === "phone" && contacts?.phone) {
              href = `tel:${contacts.phone.replace(/\s/g, "")}`;
            }

            if (!href) return null;

            return (
              <div key={contact.key}>
                <ContactItem title={t(contact.title)} href={href} imageUrl={contact.imageUrl} newTab={contact.newTab} />
                <hr className="text-gray-300" />
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
