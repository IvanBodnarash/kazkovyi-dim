"use client";

import Image from "next/image";
import vedmedyk from "../../../../public/stickers/bear.png";
import bird from "../../../../public/stickers/bird.png";
import ContactsPopupHero from "../ui/ContactsPopupHero";
import InstCard from "../cards/InstCard";
import { useState } from "react";
import InstPostDetails from "../ui/InstPostDetails";

export default function InstEvents() {
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  const instData = [
    {
      img: "https://placehold.co/400",
      description: "Some description for placeholder 1",
    },
    {
      img: "https://placehold.co/400",
      description: "Some description for placeholder 2",
    },
    {
      img: "https://placehold.co/400",
      description: "Some description for placeholder 3",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="mt-18 lg:mt-14 items-center font-calibri">
          <h1 className="text-xl lg:text-4xl font-bold text-white">
            Останні події
          </h1>
          <div className="flex flex-col justify-center lg:flex-row mt-8 gap-20">
            <InstCard setShowDetailsDialog={setShowDetailsDialog} />
            <InstCard setShowDetailsDialog={setShowDetailsDialog} />
            <InstCard setShowDetailsDialog={setShowDetailsDialog} />
          </div>
        </div>
      </div>
      {showDetailsDialog && (
        <InstPostDetails onClose={() => setShowDetailsDialog(false)} />
      )}
    </>
  );
}
