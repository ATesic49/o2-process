import React from "react";

export default function DashedBorderBox({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative  p-4 `}
			style={{
				background:
					"linear-gradient(to right, transparent 50%, #f3f4f6 50%) top/16px 3px repeat-x," +
					"linear-gradient(to right, transparent 50%, #f3f4f6 50%) bottom/16px 3px repeat-x," +
					"linear-gradient(to bottom, transparent 50%, #f3f4f6 50%) left/3px 16px repeat-y," +
					"linear-gradient(to bottom, transparent 50%, #f3f4f6 50%) right/3px 16px repeat-y",
			}}
		>
			{children}
		</div>
	);
}
