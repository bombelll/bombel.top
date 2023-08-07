import { useScroll, useSpring, motion } from 'framer-motion';

import "./scrollbar.scss"

const Scrollbar = () => {
	const { scrollYProgress } = useScroll()
	const scaleY = useSpring(scrollYProgress, {damping: 50,})

	return (
		<motion.div
			className='Scrollbar'
			style={{ scaleY }}
		/>
	);
};

export default Scrollbar;