import Image from "next/image";

export default function LoadingComponent({ fadeOut }) {
  return (
    <div
      className={`flex justify-center items-center h-screen transition-opacity ease-in-out duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Logo"
        priority
      />
    </div>
  );
}
