import "./customCursor.scss";
import Pencil from "../../assets/Pencil.png";
import Pencilt from "../../assets/Pencilt.png";
import { useRef, useEffect, useState } from "react";

const CustomCursor = () => {
	const [isHover, setIsHover] = useState(false);
	const cursorRef = useRef(null);

	useEffect(() => {
		document.addEventListener("mousemove", (event) => {
			const { clientX, clientY } = event;
			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;
			cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
			cursorRef.current.style.display = `block`;
		});
	}, []);

	useEffect(() => {
		document.addEventListener("mouseover", (event) => {
			const isClickable = event.target.onclick || event.target.href;
			if (isClickable) {
				setIsHover(true);
			}
		});
	}, []);

	useEffect(() => {
		document.addEventListener("mouseout", (event) => {
			const isClickable = event.target.onclick || event.target.href;
			if (isClickable) {
				setIsHover(false);
			}
		});
	}, []);

	return (
		<div className={`cursor ${isHover && "hover"}`} ref={cursorRef}>
			<img
				className="pencil"
				src={Pencil}
				// src={`${isHover ? Pencil : Pencilt}`}
				alt="cursor"
			/>
		</div>
	);
};

export default CustomCursor;
