import "./navButton.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavButton = (props) => {
	const { scroll } = useLocomotiveScroll();
	const mode = window.screen.width < 600 ? "mobile" : "desktop";

	const navPosition = {
		desktop: { About: -120, Experience: 20, Projects: 150, Contact: 0 },
		mobile: { About: -50, Experience: -50, Projects: -50, Contact: 0 },
	};

	return (
		<div>
			<div
				className={`nav_btn nav_btn_${props.btnName} target`}
				onClick={() => {
					const target = document.querySelector(`#${props.btnName}`);
					scroll.scrollTo(target, {
						offset: navPosition[mode][props.btnName],
						duration: 500,
						callback: () => {
							scroll.update();
						},
					});
				}}
			>
				{props.btnName}
			</div>
		</div>
	);
};

export default NavButton;
