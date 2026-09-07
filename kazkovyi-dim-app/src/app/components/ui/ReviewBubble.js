import { PortableText } from "next-sanity";
import { CgUserlane } from "react-icons/cg";

export default function ReviewBubble({ data, ...props }) {
  return (
    <div {...props} className="flex items-end gap-4 cursor-pointer">
      <CgUserlane className="text-white text-5xl bg-slate-600 rounded-full h-fit p-2" />
      <div
        className="bg-linear-to-tr from-white to-sky-100 p-3 xl:p-4 max-w-96 rounded-tl-3xl rounded-r-3xl leading-5 hover:scale-[1.01]
                    transition-transform
                    duration-300
                    ease-out
                    transform-gpu
                    will-change-transform
                  "
      >
        <h1 className="font-bold text-md lg:text-lg text-ochre">{data.name}</h1>
        <div className="text-slate-600 text-sm lg:text-md line-clamp-3">
          <PortableText value={data.review} />
        </div>
      </div>
    </div>
  );
}
