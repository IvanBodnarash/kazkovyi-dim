import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { contactItems } from "@/app/data/contacts";
import ContactItem from "./ContactItem";
import { useContacts } from "@/app/context/ContactsContext";

export default function ContactsPopup({ isPopupOpened, setIsPopupOpened }) {
  const { t } = useTranslation();
  const contacts = useContacts();

  return (
    <AnimatePresence>
      {isPopupOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex justify-center flex-col overflow-hidden top-22 rounded-2xl sm:w-65 bg-white text-gray-500 shadow-2xl"
          onClick={() => setIsPopupOpened(false)}
        >
          {contactItems.map((item) => {
            let href = contacts?.[item.key];

            if (item.key === "phone" && contacts?.phone) {
              href = `tel:${contacts.phone.replace(/\s/g, "")}`;
            }

            if (!href) return null;

            return (
              <div key={item.key}>
                <ContactItem title={t(item.title)} href={href} imageUrl={item.imageUrl} newTab={item.newTab} />

                <hr className="text-gray-300" />
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
