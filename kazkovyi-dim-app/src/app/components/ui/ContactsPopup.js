import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import instLogo from "../../../../public/icons/Instagram_icon.png";
import telegramLogo from "../../../../public/icons/Telegram_2019_Logo.svg.png";
import whatsappLogo from "../../../../public/icons/whatsapp.png";
import viberLogo from "../../../../public/icons/viber.png";
import phoneLogo from "../../../../public/icons/phone.png";

export default function ContactsPopup({ isPopupOpened, setIsPopupOpened }) {
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
          <a
            className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
            href="https://ig.me/m/kazkovyidim.cv"
            target="_blank"
          >
            <Image src={instLogo} width={30} height={30} alt="inst-logo" />
            <p>Instagram</p>
          </a>
          <hr className="text-gray-300" />
          <a
            className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
            href="https://t.me/sbdnr"
            target="_blank"
          >
            <Image
              src={telegramLogo}
              width={30}
              height={30}
              alt="telegr-logo"
            />
            <p>Telegram</p>
          </a>
          <hr className="text-gray-300" />
          <a
            className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
            href="viber://chat?number=+380955822876"
            target="_blank"
          >
            <Image src={viberLogo} width={30} height={30} alt="viber-logo" />
            <p>Viber</p>
          </a>
          <hr className="text-gray-300" />
          <a
            className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
            href="https://api.whatsapp.com/send?phone=380955822876"
            target="_blank"
          >
            <Image
              src={whatsappLogo}
              width={30}
              height={30}
              alt="whatsapp-logo"
            />
            <p>WhatsApp</p>
          </a>
          <hr className="text-gray-300" />
          <a
            className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
            href="#"
            target="_blank"
          >
            <Image
              src={phoneLogo}
              width={30}
              height={30}
              alt="telephone-logo"
            />
            <p>+380955822876</p>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
