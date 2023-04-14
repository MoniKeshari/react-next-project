import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimationControls, useScroll } from 'framer-motion';
import { useEffect, useState } from "react";


const ScrollToTopButton = () => {

    const isBrowser = () => typeof window !== 'undefined';

    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();
    const [scroll, setscroll] = useState(false);
    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
                setscroll(true)
            } else {
                controls.start('hide');
                setscroll(false)
            }
        });
    });


    const scrollToTop = () => {
        if (isBrowser()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        else {
            return;
        }
    }

    return (
        <>
            {scroll ? (<motion.button
                className="fixed bottom-0 right-0 p-10"
                initial="hide"
                animate={controls}
                onClick={scrollToTop}>
                <FaArrowUp />
            </motion.button>) : ''}

        </>

    );
}
export default ScrollToTopButton;