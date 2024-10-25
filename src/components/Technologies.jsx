import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiCplusplus, SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";
const icon_variants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={icon_variants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-6xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={icon_variants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-6xl text-yellow-200" />
                </motion.div>
                <motion.div
                    variants={icon_variants(2.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={icon_variants(2.7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-6xl text-green-700" />
                </motion.div>
                <motion.div
                    variants={icon_variants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-6xl text-green-700" />
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Technologies;
