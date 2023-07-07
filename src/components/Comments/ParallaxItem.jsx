import React from "react";
import { useTransform, useSpring, motion, useScroll } from "framer-motion";

export default function ParallaxItem({ children }){
    let ref = React.useRef();

    function useRefScrollProgress(inputRef) {
        const ref = inputRef;
      
        const [start, setStart] = React.useState(0);
        const [end, setEnd] = React.useState(0);
      
        React.useLayoutEffect(() => {
            function getScrollProps() {
                if (!ref.current) {return}
        
            const rect = ref.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop;
        
            setStart((offsetTop-200) / document.body.clientHeight);
            setEnd((offsetTop + rect.height-200) / document.body.clientHeight);
            }
            getScrollProps()

            window.addEventListener('resize', getScrollProps);
            return () => window.removeEventListener('resize', getScrollProps);
        });
      
        return { ref, start, end };
    }

    let element = useRefScrollProgress(ref);
    let { scrollYProgress } = useScroll();
    let config = {
        stiffness: 1000,
        damping: 100,
    }

    let transform = useSpring(useTransform(scrollYProgress, [element.start, element.end], [100, 0]), config)

    return (
        <motion.div className="comments_box" ref={ref} style={{ translateY: transform }}>
            {children}
        </motion.div>
    );
}