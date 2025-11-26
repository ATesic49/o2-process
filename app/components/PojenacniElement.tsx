"use client";
import React from "react";
import DashedBorderBox from "./DashedBorderBox";
import { AnimatePresence, delay, motion } from "motion/react";
const PojenacniElement = ({
	aktivno = true,
	puls = false,
	tekst,
}: {
	aktivno?: boolean;
	puls?: boolean;
	tekst: React.ReactNode;
}) => {
	return (
		<>
			<motion.div
				initial={
					aktivno
						? {
								height: "100%",
								width: "16em",
								background: "rgba(243, 244, 246, 0)",
							}
						: {
								height: "8px",
								width: "96px",
								animationDelay: 100,
								background: "rgba(243, 244, 246, 1)",
							}
				}
				animate={
					!aktivno
						? {
								height: "8px",
								width: "96px",
								animationDelay: 100,
								background: "rgba(243, 244, 246, 1)",
							}
						: {
								height: "100%",
								width: "16em",
								animationDelay: 1000,
								background: "rgba(243, 244, 246, 0)",
							}
				}
				transition={{ duration: 0.4 }}
				className={`w-[16em] ml-auto overflow-hidden relative  text-balance  rounded-2xl  backdrop-blur-sm z-20 ${puls && "animate-pulse"}   `}
			>
				<DashedBorderBox>
					<AnimatePresence>
						{true && (
							<motion.div
								exit={{ opacity: 0 }}
								transition={{ duration: 0.1 }}
								className="text-gray-100   text-lg font-medium "
							>
								{tekst}
							</motion.div>
						)}
					</AnimatePresence>
				</DashedBorderBox>
			</motion.div>
		</>
	);
};

export default PojenacniElement;
