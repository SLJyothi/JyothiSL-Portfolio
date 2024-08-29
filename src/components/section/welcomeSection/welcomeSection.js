import "./welcomeSection.scss";
import { ReactComponent as BlueBlob } from "../../../assets/BlueBlob.svg";
import { ReactComponent as DeskBg } from "../../../assets/deskbg.svg";
import { ReactComponent as DeskFt } from "../../../assets/deskfront.svg";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import portrait from "../../../assets/girl_svg1.gif";
import cafe from "../../../assets/cafe.png";

const WelcomeSection = () => {
	return (
		<section className="welcome" data-scroll-section>
			<BlueBlob className="blueblob" />
			<DeskBg className="deskbg" />
			<DeskFt className="deskft" />{" "}
			<img
				src={cafe}
				alt="cafe"
				className="cafe"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-5"
				data-scroll-position="top"
			/>
			<div className="welcome_text_section">
				<Dots className="dots" />

				<h1
					className="welcome_text_hello"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="3"
					data-scroll-position="top"
				>
					Hello! I'm Jyothi SL.
				</h1>
				<p
					className="welcome_text_intro"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="2"
					data-scroll-position="top"
				>
					  welcome to my webpage
					<br className="welcome_text_br" />
				</p>
			</div>
			<div
				className="welcome_image"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-1"
				data-scroll-position="top"
			>
				<img
					src={portrait}
					alt="portrait"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-3"
					data-scroll-position="top"
				/>
			</div>
		</section>
	);
};

export default WelcomeSection;
