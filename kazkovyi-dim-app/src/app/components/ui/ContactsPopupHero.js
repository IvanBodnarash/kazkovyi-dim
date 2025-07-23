import { motion, AnimatePresence } from "motion/react";
import { contacts } from "@/app/data/contacts";
import ContactItem from "./ContactItem";

export default function ContactsPopupHero({
  isPopupHeroOpened,
  setIsPopupHeroOpened,
}) {
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
          {contacts.map((contact) => (
            <div key={contact.href}>
              <ContactItem
                title={contact.title}
                href={contact.href}
                imageUrl={contact.imageUrl}
                newTab={contact.newTab}
              />
              <hr className="text-gray-300" />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
