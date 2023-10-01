import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';

import styles from '../styles/styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 mt-64 mb-40`}>
    <div className=" z-0 text-white" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About HackourEarth" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[40px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold">HackOurEarth</span> is the project our team made for  <span className="font-extrabold text-white">Open Source Fest. </span>
        It is the open-source management platform for all your projects it get the up to date stats fetching directly from your open-source platforms and help you to easily access and maintain all your open source projects.
        We also provide other members to collaborate in others projects.  
      </motion.p>
    </motion.div>
  </section>
);

export default About;