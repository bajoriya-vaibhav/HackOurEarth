import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../../styles/styles';
import { motion } from 'framer-motion';
import { footerVariants } from '../../utils/motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const location = useLocation();
  return ((location.pathname != '/signup' && location.pathname != '/signin') &&
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative w-full`}
  >
    <div className="w-full" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          <div className={`${styles.textXl} text-white`}>@2023,Made with ❤️ by HackOurEarth</div>
        </h4>
        <div className="grid grid-flow-col gap-4 text-white">
          <a href='https://twitter.com/VaibhavBajoriya' target='blank'><TwitterIcon/></a>
          <a href='https://www.youtube.com/channel/UCq039aJ2zACgHoBdSb2QDaQ' target='blank'><YouTubeIcon/></a>
          <a href='https://www.instagram.com/bajoriyavaibhav/' target='blank'><InstagramIcon/></a>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            <header className="footer-title">Open Source</header> 
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Thanks to visit!
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer
