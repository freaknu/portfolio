import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";
const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((p, i) => (
                    <div key={i} className='flex flex-col lg:flex-row lg:justify-start mb-8'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-6'>
                            <img
                                src={p.image}
                                width={150}
                                height={150}
                                alt={p.title}
                                className="rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-2/3'>
                            <h6 className='mb-2 font-semibold'>{p.title}</h6>
                            <p className='mb-4 text-neutral-400'>{p.description}</p>
                            <div className='flex flex-wrap'>
                                {p.technologies.map((t, i) => (
                                    <span key={i} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Projects;
