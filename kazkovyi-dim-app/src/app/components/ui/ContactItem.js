import Image from "next/image";

export default function ContactItem({ title, href, imageUrl, newTab }) {
  return (
    <a
      className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      <Image src={imageUrl} width={30} height={30} alt={title} />
      <p>{title}</p>
    </a>
  );
}
