import { contacts } from "@/app/data/contacts";
import { menuItems } from "@/app/data/menuItems";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-ochre-500/80 py-38 w-full flex flex-col justify-end items-center pb-12">
      <div className="flex flex-wrap gap-12 flex-row items-center md:items-start justify-center p-14 md:p-0 font-calibri">
        <div className="bg-white rounded-full shadow-xl p-4 hover:scale-105 cursor-pointer transition-all">
          <Image
            src="https://raw.githubusercontent.com/IvanBodnarash/kazkovyi-dim/refs/heads/main/kazkovyi-dim-app/public/logo.png"
            width={800}
            height={400}
            alt="footerImg"
            className="size-38"
          />
        </div>
        <div className="">
          <div className="flex flex-wrap flex-col lg:flex-row gap-1 lg:gap-4">
            {menuItems.map((item) => (
              <a
                className="text-white text-lg lg:text-xl hover:text-slate-300"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {contacts.map((contact) => (
            <div key={contact.imageUrl} className="flex flex-row gap-2">
              <a
                href={contact.href}
                className="text-white hover:text-slate-300 flex flex-row items-center gap-6"
                target={contact.newTab ? "_blank" : "_self"}
              >
                {contact.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="font-mono text-sm lg:text-md text-slate-50/50 mt-8 lg:mt-2">
        Built and designed by{" "}
        <a href="https://ivanbodnarash.vercel.app/">Ivan Bodnarash</a>
      </p>
    </div>
  );
}
