import { PortableText } from "next-sanity";
import { CgUserlane } from "react-icons/cg";

export default function ReviewBubble({ data }) {
  return (
    <div className="flex items-end gap-4">
      <CgUserlane className="text-white text-5xl bg-slate-600 rounded-full h-fit p-2" />
      <div className="bg-white p-3 xl:p-4 max-w-96 rounded-tl-3xl rounded-r-3xl leading-5">
        <h1 className="font-bold text-md lg:text-lg text-ochre">{data.name}</h1>
        <div className="text-slate-600 text-sm lg:text-md">
          <PortableText value={data.review} />
        </div>
      </div>
    </div>
  );
}
