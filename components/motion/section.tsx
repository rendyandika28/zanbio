"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

enum Directions {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right",
	None = "none"
}

interface IMotionSection { children: React.ReactNode, directions?: Directions }

export default function MotionSection({ children, directions = Directions.None }: IMotionSection) {
	const { ref, inView, entry } = useInView({
		triggerOnce: true, // trigger animation only once
		threshold: 0.3,    // start animating when 20% of the section is visible
	});

	const variants = {
		hidden: { opacity: 0, x: 0, y: 0 },
		visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
	};

	switch (directions) {
		case Directions.Down:
			variants.hidden['y'] = -50
			variants.visible['y'] = 0
			break;
		case Directions.Left:
			variants.hidden['x'] = -50
			variants.visible['x'] = 0
			break;
		case Directions.Right:
			variants.hidden['x'] = 50
			variants.visible['x'] = 0
			break;
		case Directions.Up:
			variants.hidden['y'] = 50
			variants.visible['y'] = 0
			break;
		default:
			break;
	}
	
	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={variants}
		>
			{children}
		</motion.section>
	)
}