import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const ScrollToTopButton = ({ scrollToTop, ScrollToTopContainerVariants, controls }: any) => {
    
    return (
        <>
            <motion.button
                className="fixed bottom-0 right-0 p-10"
                variants={ScrollToTopContainerVariants}
                initial="hide"
                animate={controls}
                onClick={scrollToTop}>
                <FaArrowUp />
            </motion.button>
        </>

    );
}
export default ScrollToTopButton;