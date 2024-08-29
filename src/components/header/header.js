import "./header.scss";
import { useState } from "react";
import NavBar from "../navBar/navBar";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollToTopBtn from "../UI/scrollToTopBtn/scrollToTopBtn.js";
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scroll } = useLocomotiveScroll();
	useEffect(() => {
		if (scroll) {
			scroll.on("scroll", (instance) => {
				if (instance.scroll.y >= 100) {
					setIsScrolled(true);
				} else {
					setIsScrolled(false);
				}
			});
		}
	}, [scroll]);

	return (
		<div className={`header ${isScrolled && "scrolled"}`}>
			<ScrollToTopBtn isScrolled={isScrolled} />
			<div
				className="header_logo target"
				onClick={() => {
					const target = document.querySelector(`.blueblob`);
					scroll.scrollTo(target, {
						offset: 0,
						duration: 500,
						callback: () => {
							scroll.update();
						},
					});
				}}
			>
				<p className="header_name btn">Jyothi_SL</p>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;
