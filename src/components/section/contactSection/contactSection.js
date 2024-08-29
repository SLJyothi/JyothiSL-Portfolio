import "./contactSection.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";
import ContactInfo from "../../UI/contactInfo/contactInfo";
import { ReactComponent as ContactTitle } from "../../../assets/contactTitle.svg";
import { ReactComponent as ContactBg } from "../../../assets/contactBg.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import Email from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Finger from "../../../assets/point.png";

const ContactSection = () => {
	const { scroll } = useLocomotiveScroll();
	const target = document.getElementById("contact_svg");
	const width = window.screen.width;
	useEffect(() => {
		if (width > 600) {
			if (scroll && target) {
				scroll.on("scroll", (instance) => {
					if (instance.limit.y - instance.scroll.y < 500) {
						target.style.transform =
							"rotate(-" + (instance.limit.y - instance.scroll.y) / 8 + "deg)";
					}
				});
			}
		}
	}, [scroll, target]);
	return (
		<div className="contact" id="Contact" data-scroll-section>
			<ContactBg className="contact_bg" />

			<div className="contact_title_wrapper" id="contact_svg">
				<ContactTitle className="contact_svg" />
				<p className="contact_title_mobile"> Contact Me!</p>
			</div>
			<div className="contact_context" data-scroll>
				<div className="contact_list">
					{" "}
					<ContactInfo
						img={Email}
						info="yaashikajyo1999@gmail.com"
						link="mailto: yaashikajyo1999@gmail.com"
					/>
					<ContactInfo
						img={FacebookIcon}
						info="Jyotni SL"
						link="https://www.instagram.com/jyo_sl/"
					/>
					<ContactInfo
						img={LinkedInIcon}
						info="Jyothi SL"
						link="https://www.linkedin.com/in/jyothi-sl1999/"
					/>
				</div>
				<div className="resume_download target">
					<a
						href="https://drive.google.com/file/d/1R_xDNHDDfqhsTJZ4OggjiOsHwsBX5oLu/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="resume_title"
					>
						Resume
					</a>
					<img src={Finger} alt="finger" />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
