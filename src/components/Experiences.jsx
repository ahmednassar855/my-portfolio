import { EXPERIENCES } from "../constants";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Experiences = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h1>
      <div>
        {EXPERIENCES.map((item, index) => (
          <div key={item.id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/5"
            >
              <p className="mb-2 text-sm text-stone-800">
                From &nbsp;&nbsp;{item.start_year}&nbsp;&nbsp;To&nbsp;&nbsp;
                {item.end_year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-3xl lg:w-4/5 "
            >
              <h6 className="mb-2 font-semibold text-xl">
                {item.role}&nbsp;&nbsp; -&nbsp;&nbsp;
                <span className=" text-purple-800">{item.company}</span>
              </h6>
              <ul>
                {item?.description.map((it) =>
                  it.list ? ( // Check if it.list is not empty or null
                    <li className="list-disc mx-8" key={it.id}>
                      {it.list}
                    </li>
                  ) : null // Render nothing if it.list is empty or null
                )}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
