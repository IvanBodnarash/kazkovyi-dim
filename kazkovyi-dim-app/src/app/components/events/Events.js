// "use client";

import EventCard from "../cards/EventCard";
// import { useState } from "react";
import EventDetails from "../ui/EventDetails";
import { motion, AnimatePresence } from "motion/react";
// import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import { fetchEvents } from "@/app/utils/fetchEvents";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default async function Events() {
  // const [showDetailsModal, setShowDetailsModal] = useState(false);
  // const [selectedData, setSelectedData] = useState({});
  // const [eventsData, setEventsData] = useState([]);

  // const events = useLoadEvents();
  // console.log(events);

  // const { projectId, dataset } = client.config();
  // const urlFor = (source) =>
  //   projectId && dataset
  //     ? imageUrlBuilder({ projectId, dataset }).image(source)
  //     : null;

  const events = await fetchEvents();

  console.log(events);

  // useDisableBodyScroll(showDetailsModal);

  const cardsData = [
    {
      img: "https://placehold.co/400",
      title: "Title1",
      description:
        "Some description for placeholder 1. Казковий Дім🤍 @kazkovyidim.cv Скільки любові, тепла та світла в одній лише назві. Назва, яку не потрібно було довго шукати, її одразу відчула всередині, в душі та серці. Моя робота, моя улюблена справа,ця прекрасна сфера й наша команда неймовірних чарівників - це те, що стало невід‘ємною частинкою формування моєї особистості, тієї Софи, якою я є зараз - наповненої любов‘ю, добром та світлом до всього світу, завжди з вірою у найкраще, з вірою у здійснення усіх мрій, Софи, яка безмежно, всім серцем любить діток, в компанії з якими відчуває себе «вдома»🫂🏡 Попереду ще так багато прекрасного й нового: розвитку, ідей, навчання, натхнення, цілей.",
    },
    {
      img: "https://placehold.co/400",
      title: "Title2",
      description:
        "Some description for placeholder 2. Казковий Дім🤍 @kazkovyidim.cv Скільки любові, тепла та світла в одній лише назві. Назва, яку не потрібно було довго шукати, її одразу відчула всередині, в душі та серці. Моя робота, моя улюблена справа,ця прекрасна сфера й наша команда неймовірних чарівників - це те, що стало невід‘ємною частинкою формування моєї особистості, тієї Софи, якою я є зараз - наповненої любов‘ю, добром та світлом до всього світу, завжди з вірою у найкраще, з вірою у здійснення усіх мрій, Софи, яка безмежно, всім серцем любить діток, в компанії з якими відчуває себе «вдома»🫂🏡 Попереду ще так багато прекрасного й нового: розвитку, ідей, навчання, натхнення, цілей.",
    },
    {
      img: "https://placehold.co/400",
      title: "Title3",
      description:
        "Some description for placeholder 3. Казковий Дім🤍 @kazkovyidim.cv Скільки любові, тепла та світла в одній лише назві. Назва, яку не потрібно було довго шукати, її одразу відчула всередині, в душі та серці. Моя робота, моя улюблена справа,ця прекрасна сфера й наша команда неймовірних чарівників - це те, що стало невід‘ємною частинкою формування моєї особистості, тієї Софи, якою я є зараз - наповненої любов‘ю, добром та світлом до всього світу, завжди з вірою у найкраще, з вірою у здійснення усіх мрій, Софи, яка безмежно, всім серцем любить діток, в компанії з якими відчуває себе «вдома»🫂🏡 Попереду ще так багато прекрасного й нового: розвитку, ідей, навчання, натхнення, цілей.",
    },
    {
      img: "https://placehold.co/400",
      title: "Title4",
      description:
        "Some description for placeholder 4. Казковий Дім🤍 @kazkovyidim.cv Скільки любові, тепла та світла в одній лише назві. Назва, яку не потрібно було довго шукати, її одразу відчула всередині, в душі та серці. Моя робота, моя улюблена справа,ця прекрасна сфера й наша команда неймовірних чарівників - це те, що стало невід‘ємною частинкою формування моєї особистості, тієї Софи, якою я є зараз - наповненої любов‘ю, добром та світлом до всього світу, завжди з вірою у найкраще, з вірою у здійснення усіх мрій, Софи, яка безмежно, всім серцем любить діток, в компанії з якими відчуває себе «вдома»🫂🏡 Попереду ще так багато прекрасного й нового: розвитку, ідей, навчання, натхнення, цілей.",
    },
  ];

  const lastThreePosts = cardsData.slice(-3);

  return (
    <>
      {/* <div className="mx-auto max-w-screen-xl px-4 pb-8 md:px-6 lg:px-8">
        <div className="mt-4 md:mt-18 lg:mt-14 items-center font-calibri">
          <h1 className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white">
            Наші події та новинки
          </h1>
          <div className="flex flex-wrap justify-center mt-8 gap-14">
            {lastThreePosts.map((card, index) => (
              <EventCard
                key={index}
                title={card.title}
                description={card.description}
                img={card.img}
                setShowDetailsModal={setShowDetailsModal}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EventDetails
              data={selectedData}
              onClose={() => setShowDetailsModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}
