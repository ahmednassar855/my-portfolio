import React from 'react'
import { motion } from 'framer-motion';
import { COURSES } from '../constants';

const Courses = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl"
    >
      Courses
    </motion.h1>
    <div>
      {COURSES.map((item, index) => (
        <div key={item.id} className="mb-4 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="md:w-2/4 bg-purple-200 "
          >
             <ul>
                <li className='list-disc'>{item.subject}</li>
             </ul>
          </motion.div>
           
        </div>
      ))}
    </div>
  </div>
  )
}

export default Courses